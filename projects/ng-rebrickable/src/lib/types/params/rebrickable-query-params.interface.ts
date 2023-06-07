import {RebrickableOrdering} from './rebrickable-ordering.interface';

export interface RebrickableQueryParams {
  ordering?: RebrickableOrdering<string>;

  [key: string]: any;
}
