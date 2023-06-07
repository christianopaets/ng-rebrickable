import {RebrickableOrderingQueryParams, RebrickablePageQueryParams} from '../params';
import {SetAlternate} from 'ng-rebrickable';

export type SetAlternatesQueryParams = RebrickablePageQueryParams & RebrickableOrderingQueryParams<keyof SetAlternate>;
