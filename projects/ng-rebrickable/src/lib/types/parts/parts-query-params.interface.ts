import { RebrickableOrderingQueryParams, RebrickablePageQueryParams } from '../params';
import { Part } from './part.interface';

export type PartsQueryParams = {
  part_cat_id?: string | number;
  color_id?: string | number;
  bricklink_id?: string | number;
  brickowl_id?: string | number;
  lego_id?: string | number;
  ldraw_id?: string | number;
  search?: string;
  part_num?: number | string;
  part_nums?: (number | string)[];
} & RebrickablePageQueryParams &
  RebrickableOrderingQueryParams<keyof Part>;
