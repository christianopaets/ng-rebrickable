import { Injectable } from "@angular/core";

@Injectable()
export class RebrickableLoggerService {
  warn(message: string): void {}
  debug(message: string, ...args: unknown[]): void {}
}
