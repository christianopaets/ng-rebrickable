import { RebrickableOrderingQueryParams, RebrickablePageQueryParams } from "../params";
import { Theme } from "./theme.interface";

export type ThemesQueryParams = RebrickableOrderingQueryParams<keyof Theme> & RebrickablePageQueryParams;
