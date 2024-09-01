import { APP_INITIALIZER, Provider } from "@angular/core";
import { RebrickableCacheService } from "ng-rebrickable";
import { IndexedDBCacheService } from "./indexeddb-cache.service";

export function withIndexedDBCache(): Provider[] {
  return [
    {
      provide: RebrickableCacheService,
      useClass: IndexedDBCacheService,
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (cacheService: RebrickableCacheService) => {
        return () => cacheService.initialize();
      },
      deps: [RebrickableCacheService],
    },
  ];
}

export * from "./indexeddb-cache.service";
