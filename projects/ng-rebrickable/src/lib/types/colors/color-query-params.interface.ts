import {RebrickableOrderingQueryParams} from '../params';
import {ColorDetails} from './color.interface';

export type ColorQueryParams = RebrickableOrderingQueryParams<keyof ColorDetails>;
