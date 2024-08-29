export interface RebrickableOrdering<T extends string> {
  type: "ASC" | "DESC";
  fields: T | T[];
}
