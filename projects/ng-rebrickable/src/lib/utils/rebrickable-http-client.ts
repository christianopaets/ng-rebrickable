import { inject, Injectable } from "@angular/core";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { REBRICKABLE_API_KEY } from "./injectors";
import { RebrickableQueryParams } from "../types";

@Injectable()
export class RebrickableHttpClient {
  private readonly handler = inject(HttpBackend);
  private readonly apiKey = inject(REBRICKABLE_API_KEY);
  private readonly http = new HttpClient(this.handler);
  private readonly baseUrl: string = "https://rebrickable.com/api/v3/lego/";

  get<T>(url: string, config?: RebrickableQueryParams): Observable<T> {
    const queryParams = this._createQueryParams(config);
    return this.http.get<T>(this._createUrl(url, queryParams), {
      headers: { Authorization: `key ${this.apiKey}` },
    });
  }

  private _createUrl(path: string, params: string): string {
    path = path.replace(/^\/?(.+)\/?$/, "$1");
    if (path.charAt(path.length - 1) === "/") {
      path = path.slice(0, path.length - 1);
    }
    const url = new URL(`${path}/`, this.baseUrl);
    const query = params ? `?${params}` : "";
    return `${url.toString()}${query}`;
  }

  private _createQueryParams(config?: RebrickableQueryParams): string {
    if (!config) {
      return "";
    }
    const keys = Object.keys(config).sort() as (keyof RebrickableQueryParams)[];
    const params = new URLSearchParams();
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
    return params.toString();
  }
}
