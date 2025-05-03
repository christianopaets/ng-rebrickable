import { Injectable } from "@angular/core";
import { RebrickableCacheService } from "./rebrickable-cache.service";

@Injectable()
export class NoCacheService extends RebrickableCacheService {
  override save(): void {}

  override get(): undefined {
    return undefined;
  }
  override async clear(): Promise<void> {}
}
