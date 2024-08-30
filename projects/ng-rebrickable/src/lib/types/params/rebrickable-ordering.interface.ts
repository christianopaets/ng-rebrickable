export interface RebrickableOrderingItem<T extends string> {
  type: "ASC" | "DESC";
  field: T;
}

export type RebrickableOrdering<T extends string> = RebrickableOrderingItem<T> | RebrickableOrderingItem<T>[];
