import { Orderables } from '../types'
import { PitchIds } from '../../Pitch'
import { DegreeIds } from '../../Degree'

import { getAscendingIds } from './index'

const { Root, Flat2, Second, Flat3, Third, Fourth, Flat5, Fifth, Flat6, Sixth, Flat7, Seventh } = DegreeIds

test('getAscendingIds function returns an ordered array of the available degreeIds defaulting to starting at root', () => {
  const expectedArray = [
    Root, Flat2, Second, Flat3, Third, Fourth,
    Flat5, Fifth, Flat6, Sixth, Flat7, Seventh
  ]
  const orderedDegreeIdsProps = {
    type: Orderables.Degree,
  }
  const actualArray = getAscendingIds(orderedDegreeIdsProps)

  expect(actualArray).toEqual(expectedArray)
})

test('getAscendingPitchIds function returns an ordered array of the available pitches defaulting to starting at C', () => {
  const expectedArray = [
    PitchIds.C, PitchIds.Db, PitchIds.D, PitchIds.Eb, PitchIds.E, PitchIds.F,
    PitchIds.Gb, PitchIds.G, PitchIds.Ab, PitchIds.A, PitchIds.Bb, PitchIds.B
  ]
  const orderedPitchIdsProps = {
    type: Orderables.Pitch,
  }
  const actualArray = getAscendingIds(orderedPitchIdsProps)

  expect(actualArray).toEqual(expectedArray)
})
