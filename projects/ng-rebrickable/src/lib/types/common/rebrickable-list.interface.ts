export interface RebrickableList<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
