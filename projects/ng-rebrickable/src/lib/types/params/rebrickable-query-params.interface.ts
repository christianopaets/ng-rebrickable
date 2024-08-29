import { RebrickableOrdering } from './rebrickable-ordering.interface';

export interface RebrickableQueryParams {
  ordering?: RebrickableOrdering<string>;
  inc_part_details?: true;
  inc_color_details?: false;

  [key: string]: any;
}
