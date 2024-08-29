import { ColorDetails } from './color.interface';
import { RebrickableOrderingQueryParams, RebrickablePageQueryParams } from '../params';

export type ColorsQueryParams = RebrickableOrderingQueryParams<keyof ColorDetails> & RebrickablePageQueryParams;
