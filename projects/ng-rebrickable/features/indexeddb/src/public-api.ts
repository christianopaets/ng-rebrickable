import { EnvironmentProviders, inject, provideAppInitializer, Provider } from "@angular/core";
import { RebrickableCacheService } from "ng-rebrickable";
import { IndexedDBCacheService } from "./indexeddb-cache.service";

export function withIndexedDBCache(): (EnvironmentProviders | Provider)[] {
  return [
    { provide: RebrickableCacheService, useClass: IndexedDBCacheService },
    provideAppInitializer(() => {
      const cacheService = inject(RebrickableCacheService);
      return cacheService.initialize();
    }),
  ];
}

export * from "./indexeddb-cache.service";
