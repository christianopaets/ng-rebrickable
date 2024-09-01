import { Injectable } from "@angular/core";
import { RebrickableLoggerService } from "ng-rebrickable";

@Injectable()
export class LoggerService extends RebrickableLoggerService {
  override warn(message: string): void {
    console.warn("%c[NgRebrickable]", "font-weight: bold;", message);
  }

  override debug(message: string, ...args: unknown[]): void {
    console.debug("%c[NgRebrickable]", "font-weight: bold;", message, ...args);
  }
}
