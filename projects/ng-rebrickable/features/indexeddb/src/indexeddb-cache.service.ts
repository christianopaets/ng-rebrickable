import { inject, Injectable } from "@angular/core";
import { RebrickableCacheService, RebrickableLoggerService, RebrickableQueryParams } from "ng-rebrickable";

@Injectable()
export class IndexedDBCacheService extends RebrickableCacheService {
  private readonly logger = inject(RebrickableLoggerService);
  private db: IDBDatabase | undefined;

  constructor() {
    super();
    if (!this.available()) {
      this.logger.warn("IndexedDB is not available in this environment.");
    }
  }

  override save<T>(url: string, params: URLSearchParams, _: RebrickableQueryParams | undefined, data: T): void {
    if (!this.available()) {
      return;
    }
    if (!this.db) {
      return;
    }
    this.db
      .transaction(["cache"], "readwrite")
      .objectStore("cache")
      .add({ url: `${url}${params.toString()}`, data: data, alive: Date.now() + this.alive });
  }

  override get<T>(url: string, params: URLSearchParams): Promise<T | undefined> | undefined {
    if (!this.available()) {
      return undefined;
    }
    return new Promise<T | undefined>((resolve) => {
      if (!this.db) {
        return resolve(undefined);
      }
      const key = `${url}${params.toString()}`;
      const transaction = this.db.transaction(["cache"], "readonly").objectStore("cache").get(key);
      transaction.onsuccess = () => {
        const cache = transaction.result;
        if (!cache) {
          return resolve(undefined);
        }
        if (!("alive" in cache) || !("data" in cache)) {
          return resolve(undefined);
        }
        if (Date.now() > cache.alive && this.db) {
          this.db.transaction(["cache"], "readwrite").objectStore("cache").delete(key);
          return resolve(undefined);
        }
        return resolve(cache.data);
      };
      transaction.onerror = () => resolve(undefined);
    });
  }

  override async initialize(): Promise<void> {
    if (!this.available()) {
      return;
    }
    return new Promise<void>((resolve) => {
      const request = indexedDB.open("ng-rebrickable-cache", 1);
      request.onerror = () => {
        this.logger.warn(`IndexedDB error: ${request.error}`);
        resolve();
      };

      request.onsuccess = () => {
        this.logger.debug("Successful CacheDB connection");
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = () => {
        this.logger.debug("CacheDB was successfully created");
        const db = request.result;
        const cacheTable = db.createObjectStore("cache", { keyPath: "url" });
        cacheTable.createIndex("url", "url", { unique: true });
        cacheTable.createIndex("data", "data", { unique: false });
        cacheTable.createIndex("alive", "alive", { unique: false });
        cacheTable.transaction.oncomplete = () => {
          this.logger.debug("Cache Table was successfully created");
        };
      };
    });
  }

  private available(): boolean {
    return "indexedDB" in window;
  }
}
