import {RebrickableOrderingQueryParams} from '../params';
import {PartCategory} from './part-category.interface';

export type PartCategoryQueryParams = RebrickableOrderingQueryParams<keyof PartCategory>;
