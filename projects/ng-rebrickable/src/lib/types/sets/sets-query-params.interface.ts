import {RebrickableOrderingQueryParams, RebrickablePageQueryParams} from '../params';
import {RebrickableSet} from 'ng-rebrickable';

export type SetsQueryParams = {
  theme_id?: number | string;
  min_year?: number;
  max_year?: number;
  min_parts?: number;
  max_parts?: number;
  search?: string;
} & RebrickableOrderingQueryParams<keyof RebrickableSet> & RebrickablePageQueryParams;
