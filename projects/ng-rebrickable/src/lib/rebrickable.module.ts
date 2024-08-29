import { ModuleWithProviders, NgModule } from '@angular/core';
import { RebrickableService } from './rebrickable.service';
import { REBRICKABLE_API_KEY } from './utils/injectors';
import { NgRebrickableConfig } from './utils/config.interface';
import { RebrickableHttpClient } from './utils/rebrickable-http-client';
import { Logger } from './utils/logger';

@NgModule({
  providers: [RebrickableService, RebrickableHttpClient],
})
export class RebrickableModule {
  static forRoot(config: NgRebrickableConfig): ModuleWithProviders<RebrickableModule> {
    if (config.debug) {
      Logger.enableDebug();
    }
    Logger.debug('Initialize');
    return {
      ngModule: RebrickableModule,
      providers: [
        {
          provide: REBRICKABLE_API_KEY,
          useValue: config.apiKey,
        },
      ],
    };
  }
}
