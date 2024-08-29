export class Logger {
  private static _debug: boolean = false;

  static enableDebug(): void {
    this._debug = true;
  }

  static warn(message: string): void {
    console.warn("%c[NgRebrickable]", "font-weight: bold;", message);
  }

  static debug(message: string, ...args: unknown[]): void {
    if (!this._debug) {
      return;
    }
    console.debug("%c[NgRebrickable]", "font-weight: bold;", message, ...args);
  }
}
