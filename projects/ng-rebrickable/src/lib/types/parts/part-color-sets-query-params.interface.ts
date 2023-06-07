import {RebrickableOrderingQueryParams, RebrickablePageQueryParams} from '../params';
import {RebrickableSet} from '../sets';

export type PartColorSetsQueryParams = RebrickableOrderingQueryParams<keyof RebrickableSet> & RebrickablePageQueryParams;
