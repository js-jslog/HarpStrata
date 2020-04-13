export enum PositionIds {
  First = 'FIRST',
  Second = 'SECOND',
}

export interface Position {
  readonly id: PositionIds;
  readonly root: number;
}
