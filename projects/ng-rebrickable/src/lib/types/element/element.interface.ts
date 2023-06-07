import {Color} from '../colors';
import {PartDetails} from '../parts';

export interface Element {
  part: PartDetails;
  color: Color;
  element_id: string;
  design_id: string;
  element_img_url: string;
  part_img_url: string;
}
