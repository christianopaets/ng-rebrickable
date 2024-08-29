import { Provider } from '@angular/core';
import { RebrickableService } from './rebrickable.service';
import { REBRICKABLE_API_KEY } from './utils/injectors';
import { NgRebrickableConfig } from './utils/config.interface';
import { RebrickableHttpClient } from './utils/rebrickable-http-client';
import { Logger } from './utils/logger';

export function provideRebrickable(config: NgRebrickableConfig): Provider[] {
  if (config.debug) {
    Logger.enableDebug();
  }
  Logger.debug('Initialize');
  return [
    RebrickableService,
    RebrickableHttpClient,
    {
      provide: REBRICKABLE_API_KEY,
      useValue: config.apiKey,
    },
  ];
}
