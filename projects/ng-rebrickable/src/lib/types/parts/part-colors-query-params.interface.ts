import { RebrickableOrderingQueryParams, RebrickablePageQueryParams } from '../params';
import { PartColor } from './part-color.interface';

export type PartColorsQueryParams = RebrickablePageQueryParams & RebrickableOrderingQueryParams<keyof PartColor>;
