import {RebrickableOrderingQueryParams, RebrickablePageQueryParams} from '../params';
import {SetAlternate} from './set-alternate.interface';

export type SetAlternatesQueryParams = RebrickablePageQueryParams & RebrickableOrderingQueryParams<keyof SetAlternate>;
