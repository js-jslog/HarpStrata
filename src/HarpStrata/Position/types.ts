export enum PositionIds {
  First = 'FIRST',
  Second = 'SECOND',
}

export interface Position {
  id: PositionIds;
  root: number;
}
