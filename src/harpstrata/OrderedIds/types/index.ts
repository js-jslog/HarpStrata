import { PitchIds } from '../../Pitch'
import { DegreeIds } from '../../Degree'

export enum Orderables {
  Degree = 'DEGREE',
  Pitch = 'PITCH',
  Pozition = 'POZITION',
}

export type OrderedDegreeIdsProps = {
  readonly type: Orderables;
  readonly origin?: DegreeIds;
}

export type OrderedPitchIdsProps = {
  readonly type: Orderables;
  readonly origin?: PitchIds;
}

export type OrderedIdsProps = OrderedDegreeIdsProps | OrderedPitchIdsProps
