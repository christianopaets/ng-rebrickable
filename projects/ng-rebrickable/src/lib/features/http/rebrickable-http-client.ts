import { inject, Injectable } from "@angular/core";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { from, Observable, of, switchMap, tap } from "rxjs";
import { REBRICKABLE_API_KEY } from "./index";
import { RebrickableQueryParams } from "../../types";
import { RebrickableCacheService } from "../index";

@Injectable()
export class RebrickableHttpClient {
  private readonly handler = inject(HttpBackend);
  private readonly apiKey = inject(REBRICKABLE_API_KEY);
  private readonly cache = inject(RebrickableCacheService);
  private readonly http = new HttpClient(this.handler);
  private readonly baseUrl: string = "https://rebrickable.com/api/v3/lego/";
  private readonly options = { headers: { Authorization: `key ${this.apiKey}` } };

  get<T>(url: string, config?: RebrickableQueryParams): Observable<T> {
    const params = this.createQueryParams(config);
    const cached = this.cache.get<T>(url, params, config);
    if (cached instanceof Promise || cached instanceof Observable) {
      return from(cached).pipe(switchMap((res) => (res ? of(res) : this.request<T>(url, params, config))));
    }
    if (cached) {
      return of(cached);
    }
    return this.request(url, params, config);
  }

  private request<T>(url: string, params: URLSearchParams, config?: RebrickableQueryParams): Observable<T> {
    return this.http
      .get<T>(this.createUrl(url, params.toString()), this.options)
      .pipe(tap((res) => this.cache.save(url, params, config, res)));
  }

  private createUrl(path: string, params: string): string {
    path = path.replace(/^\/?(.+)\/?$/, "$1");
    if (path.charAt(path.length - 1) === "/") {
      path = path.slice(0, path.length - 1);
    }
    const url = new URL(`${path}/`, this.baseUrl);
    const query = params ? `?${params}` : "";
    return `${url.toString()}${query}`;
  }

  private createQueryParams(config?: RebrickableQueryParams): URLSearchParams {
    const params = new URLSearchParams();
    if (!config) {
      return params;
    }
    const keys = Object.keys(config).sort() as (keyof RebrickableQueryParams)[];
    keys
      .filter((key) => config[key] !== null || config[key] !== undefined)
      .forEach((key) => {
        if (key === "ordering") {
          const ordering = Array.isArray(config.ordering) ? config.ordering : config.ordering ? [config.ordering] : [];
          const orderingParams = ordering.map((order) => `${order.type === "ASC" ? "" : "-"}${order.field}`).join(",");
          params.append(key, orderingParams);
          return;
        }
        if (key === "inc_part_details") {
          params.append(key, "1");
          return;
        }
        if (key === "inc_color_details") {
          params.append(key, "0");
          return;
        }
        if (Array.isArray(config[key])) {
          params.append(key as string, `${config[key].join(",")}`);
          return;
        }
        params.append(key as string, `${config[key]}`);
      });
    return params;
  }
}
