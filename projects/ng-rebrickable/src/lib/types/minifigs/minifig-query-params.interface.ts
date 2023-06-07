import {RebrickableOrderingQueryParams, RebrickablePageQueryParams} from '../params';
import {Minifig} from './minifig.interface';

export type MinifigQueryParams = {
  min_parts?: number;
  max_parts?: number;
  in_set_num?: number | string;
  in_theme_id?: number | string;
  search?: string;
} & RebrickableOrderingQueryParams<keyof Minifig> & RebrickablePageQueryParams;
