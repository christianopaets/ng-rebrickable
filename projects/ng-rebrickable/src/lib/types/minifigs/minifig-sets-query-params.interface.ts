import {RebrickableOrderingQueryParams, RebrickablePageQueryParams} from '../params';
import {RebrickableSet} from '../sets';

export type MinifigSetsQueryParams = RebrickablePageQueryParams & RebrickableOrderingQueryParams<keyof Omit<RebrickableSet, 'theme_id' | 'year'>>;
