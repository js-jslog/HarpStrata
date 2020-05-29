import { PitchIds } from '../../Pitch'

export const getAscendingPitchIds = (originId: PitchIds = PitchIds.C): ReadonlyArray<PitchIds> => {
  const ascendingPitchIds = Object.values(PitchIds)

  const originIndex = ascendingPitchIds.indexOf(originId)

  const head = [ ...ascendingPitchIds.slice(originIndex) ]
  const tail = [ ...ascendingPitchIds.slice(0, (originIndex)) ]

  return [ ...head, ...tail ]
}

export const getDescendingPitchIds = (originId: PitchIds = PitchIds.C): ReadonlyArray<PitchIds> => {
  const ascendingPitchIds = getAscendingPitchIds(originId)
  const [ , ...ascendingWithoutOrigin ] = ascendingPitchIds
  const descendingWithoutOrigin = [ ...ascendingWithoutOrigin ].reverse()

  return [ originId, ...descendingWithoutOrigin ]
}
