import { inject, Injectable } from "@angular/core";
import { RebrickableCacheService, RebrickableLoggerService, RebrickableQueryParams } from "ng-rebrickable";

type CachedData = {
  alive: number;
  data: unknown;
};

@Injectable()
export class LocalStorageCacheService extends RebrickableCacheService {
  private readonly prefix = "ng-rebrickable";
  private readonly logger = inject(RebrickableLoggerService);

  constructor() {
    super();
    if (!this.available()) {
      this.logger.warn("LocalStorage is not available in this environment.");
    }
  }

  override save<T>(url: string, params: URLSearchParams, _: RebrickableQueryParams | undefined, data: T): void {
    if (!this.available()) {
      return;
    }
    try {
      const key = `${this.prefix}:${encodeURIComponent(url)}:${params.toString()}`;
      const cache: CachedData = { alive: Date.now() + this.alive, data };
      localStorage.setItem(key, JSON.stringify(cache));
    } catch (e) {
      this.logger.warn("Failed to save cache");
    }
  }

  override get<T>(url: string, params: URLSearchParams): T | undefined {
    if (!this.available()) {
      return undefined;
    }
    const key = `${this.prefix}:${encodeURIComponent(url)}:${params.toString()}`;
    if (!this.check(url, params)) {
      return undefined;
    }
    try {
      const cache = JSON.parse(localStorage.getItem(key) ?? "");
      if (!("alive" in cache) || !("data" in cache)) {
        return undefined;
      }
      if (Date.now() > cache.alive) {
        return undefined;
      }
      return cache.data;
    } catch (e) {
      this.logger.warn("Failed to retrieve cache");
      return undefined;
    }
  }

  private check(url: string, params: URLSearchParams): boolean {
    if (!this.available()) {
      return false;
    }
    const key = `${this.prefix}:${encodeURIComponent(url)}:${params.toString()}`;
    return typeof localStorage.getItem(key) === "string";
  }

  private available(): boolean {
    return "localStorage" in window;
  }
}
