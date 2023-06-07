import {Part} from './part.interface';

export interface PartDetails extends Part {
  year_from: number;
  year_to: number;
  prints: string[];
  molds: string[];
  alternates: unknown[];
}
