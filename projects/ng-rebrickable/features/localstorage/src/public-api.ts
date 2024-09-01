import { Provider } from "@angular/core";
import { RebrickableCacheService } from "ng-rebrickable";
import { LocalStorageCacheService } from "./local-storage-cache.service";

export function withLocalStorageCache(): Provider {
  return {
    provide: RebrickableCacheService,
    useClass: LocalStorageCacheService,
  };
}
