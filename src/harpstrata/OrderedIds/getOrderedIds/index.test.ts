import { Orderables } from '../types'
import { PozitionIds } from '../../Pozition'
import { PitchIds } from '../../Pitch'
import { DegreeIds } from '../../Degree'

import { getAscendingIds } from './index'

test('getAscendingIds function returns an ordered array of the available degreeIds defaulting to starting at root', () => {
  const expectedArray = [
    DegreeIds.Root, DegreeIds.Flat2, DegreeIds.Second, DegreeIds.Flat3, DegreeIds.Third, DegreeIds.Fourth,
    DegreeIds.Flat5, DegreeIds.Fifth, DegreeIds.Flat6, DegreeIds.Sixth, DegreeIds.Flat7, DegreeIds.Seventh
  ]
  const orderedDegreeIdsProps = {
    type: Orderables.Degree,
  }
  const actualArray = getAscendingIds(orderedDegreeIdsProps)

  expect(actualArray).toEqual(expectedArray)
})

test('getAscendingIds function returns an ordered array of the available degreeIds starting at a parameterised origin', () => {
  const expectedArray = [
    DegreeIds.Flat5, DegreeIds.Fifth, DegreeIds.Flat6, DegreeIds.Sixth, DegreeIds.Flat7, DegreeIds.Seventh,
    DegreeIds.Root, DegreeIds.Flat2, DegreeIds.Second, DegreeIds.Flat3, DegreeIds.Third, DegreeIds.Fourth,
  ]
  const orderedDegreeIdsProps = {
    type: Orderables.Degree,
    origin: DegreeIds.Flat5,
  }
  const actualArray = getAscendingIds(orderedDegreeIdsProps)

  expect(actualArray).toEqual(expectedArray)
})

test('getAscendingIds function returns an ordered array of the available pitches defaulting to starting at C', () => {
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

test('getAscendingIds function returns an ordered array of the pozitions defaulting to starting at First', () => {
  const expectedArray = [
    PozitionIds.First, PozitionIds.Eighth, PozitionIds.Third, PozitionIds.Tenth,
    PozitionIds.Fifth, PozitionIds.Twelfth, PozitionIds.Seventh, PozitionIds.Second,
    PozitionIds.Ninth, PozitionIds.Fourth, PozitionIds.Eleventh, PozitionIds.Sixth
  ]
  const orderedPozitionIdsProps = {
    type: Orderables.Pozition,
  }
  const actualArray = getAscendingIds(orderedPozitionIdsProps)

  expect(actualArray).toEqual(expectedArray)
})
