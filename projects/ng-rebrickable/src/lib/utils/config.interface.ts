import { TApiEndpoint } from "./api-enpoints.enum";

export type RebrickableCache = false | Partial<Record<TApiEndpoint, string>> | string;

export interface NgRebrickableConfig {
  apiKey: string;
  debug?: boolean;
  // cache?: RebrickableCache;
}
