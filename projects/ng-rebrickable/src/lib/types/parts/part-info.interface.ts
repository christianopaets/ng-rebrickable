import { Part, PartDetails } from './index';
import { Color, ColorDetails } from '../colors';

export interface PartInfo<TPart extends Part | PartDetails = Part, TColor extends Color | ColorDetails = ColorDetails> {
  id: number;
  inv_part_id: number;
  part: TPart;
  color: TColor;
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id: string;
  num_sets: number;
}
