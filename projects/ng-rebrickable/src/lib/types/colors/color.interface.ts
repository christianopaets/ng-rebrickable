import {ColorExternalId} from './color-external-id.interface';

export interface Color {
  id: number;
  name: string;
  rgb: string;
  is_trans: boolean;
  external_ids: Record<string, ColorExternalId>;
}
