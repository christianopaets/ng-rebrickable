import { Provider } from "@angular/core";
import { RebrickableService } from "./rebrickable.service";
import { REBRICKABLE_API_KEY, RebrickableHttpClient } from "./features/http";
import { NoCacheService, RebrickableCacheService, RebrickableLoggerService } from "./features";

export function provideRebrickable(apiKey: string, ...features: Provider[]): Provider[] {
  return [
    RebrickableService,
    RebrickableHttpClient,
    RebrickableLoggerService,
    { provide: RebrickableCacheService, useClass: NoCacheService },
    { provide: REBRICKABLE_API_KEY, useValue: apiKey },
    ...features,
  ];
}

export * from "./types";
export * from "./features";
export * from "./rebrickable.service";
