import {RebrickableOrderingQueryParams, RebrickablePageQueryParams} from '../params';

export type SetsQueryParams = {
  theme_id?: number | string;
  min_year?: number;
  max_year?: number;
  min_parts?: number;
  max_parts?: number;
  search?: string;
} & RebrickableOrderingQueryParams<string> & RebrickablePageQueryParams;
