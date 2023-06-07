import {ColorDetails} from './color.interface';
import {RebrickablePageQueryParams} from '../params';
import {RebrickableOrderingQueryParams} from '../params';

export type ColorsQueryParams = RebrickableOrderingQueryParams<keyof ColorDetails> & RebrickablePageQueryParams;
