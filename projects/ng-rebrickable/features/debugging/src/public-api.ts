import { Provider } from "@angular/core";
import { RebrickableLoggerService } from "ng-rebrickable";
import { LoggerService } from "./logger.service";

export function withDebugging(): Provider {
  return {
    provide: RebrickableLoggerService,
    useClass: LoggerService,
  };
}
