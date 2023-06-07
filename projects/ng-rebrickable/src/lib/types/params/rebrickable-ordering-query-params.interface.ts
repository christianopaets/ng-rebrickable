import {RebrickableOrdering} from './rebrickable-ordering.interface';

export interface RebrickableOrderingQueryParams<T extends string> {
  ordering?: RebrickableOrdering<T>;
}
