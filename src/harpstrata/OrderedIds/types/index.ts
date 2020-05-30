import { PozitionIds } from '../../Pozition'
import { PitchIds } from '../../Pitch'
import { DegreeIds } from '../../Degree'

export enum Orderables {
  Degree = 'DEGREE',
  Pitch = 'PITCH',
  Pozition = 'POZITION',
}

export type OrderedDegreeIdsProps = {
  readonly type: Orderables.Degree;
  readonly origin?: DegreeIds;
}

export type OrderedPitchIdsProps = {
  readonly type: Orderables.Pitch;
  readonly origin?: PitchIds;
}

export type OrderedPozitionIdsProps = {
  readonly type: Orderables.Pozition;
  readonly origin?: PozitionIds;
}

export type OrderedIdsProps = OrderedDegreeIdsProps | OrderedPitchIdsProps | OrderedPozitionIdsProps
