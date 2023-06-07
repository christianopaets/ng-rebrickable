import {RebrickableOrderingQueryParams, RebrickablePageQueryParams} from '../params';
import {PartCategory} from './part-category.interface';

export type PartCategoriesQueryParams = RebrickablePageQueryParams & RebrickableOrderingQueryParams<keyof PartCategory>
