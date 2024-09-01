import { Injectable } from "@angular/core";
import { RebrickableQueryParams } from "../../types";
import { EMPTY, Observable } from "rxjs";

@Injectable()
export class RebrickableCacheService {
  /**
   * The number of milliseconds representing the duration of time
   * that an object or process remains active or viable.
   *
   * @type {number}
   * @default 2 hours
   */
  protected readonly alive: number = 2 * 60 * 60 * 1000;

  /**
   * Initializes the software.
   *
   * @return {Promise<unknown> | Observable<unknown>} The result of the initialization process.
   */
  initialize(): Promise<unknown> | Observable<unknown> {
    return EMPTY;
  }

  /**
   * Saves the data to the specified URL.
   *
   * @param {string} url - The URL where the data will be saved.
   * @param {URLSearchParams} params - The URL parameters to be sent along with the request.
   * @param {RebrickableQueryParams | undefined} query - The additional query parameters for the request.
   * @param {T} data - The data to be saved.
   *
   * @return {void}
   */
  save<T>(url: string, params: URLSearchParams, query: RebrickableQueryParams | undefined, data: T): void {}

  /**
   * Retrieves the cached data for the given URL, params, and query.
   *
   * @param {string} url - The URL for the cache entry.
   * @param {URLSearchParams} params - The URL parameters for the cache entry.
   * @param {RebrickableQueryParams} query - The query parameters for the cache entry.
   * @returns {T | Promise<T> | Observable<T> | undefined} The cached data if found, otherwise undefined.
   */
  get<T>(
    url: string,
    params: URLSearchParams,
    query?: RebrickableQueryParams,
  ): T | Promise<T | undefined> | Observable<T | undefined> | undefined {
    return undefined;
  }
}
