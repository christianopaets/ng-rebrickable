import { Injectable } from "@angular/core";
import { RebrickableCache } from "./config.interface";
import { TApiEndpoint } from "./api-enpoints.enum";

@Injectable()
export class CacheService {
  open(table: TApiEndpoint): void {
    if (!("indexedDB" in window)) {
      console.log("bbb");
      return;
    }
    const dataBase = indexedDB.open("ng-rebrickable");
    dataBase.onupgradeneeded = () => {
      console.log("aaa");
      const db = dataBase.result;
      const store = db.createObjectStore(table, { keyPath: "id" });
      store.createIndex("url", "url", { unique: true });
      store.createIndex("response", "response");
      store.createIndex("limit", "limit");
      store.put({ url: "1", response: "111", limit: new Date() });
    };

    dataBase.onsuccess = () => {
      console.log(dataBase.result);
    };
  }

  static validateCacheObject(rebrickableCache: RebrickableCache): boolean {
    if (typeof rebrickableCache === "boolean") {
      return !rebrickableCache;
    }
    if (typeof rebrickableCache === "string") {
      return this.validateCacheDuration(rebrickableCache);
    }
    return !Object.keys(rebrickableCache).some(
      (key) => !this.validateCacheDuration(rebrickableCache[key as TApiEndpoint]),
    );
  }

  private static validateCacheDuration(value: string | undefined): boolean {
    if (!value) {
      return false;
    }
    return /^[1-9](\d*)[mhd]$/.test(value);
  }
}
