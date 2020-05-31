import { Orderables } from '../types'
import type { OrderedDegreeIdsProps, OrderedPitchIdsProps, OrderedPozitionIdsProps } from '../types'
import { PozitionIds } from '../../Pozition'
import { PitchIds } from '../../Pitch'
import { DegreeIds } from '../../Degree'


import { getAscendingIds } from './index'
import { getDescendingIds } from './index'

test('getAscendingIds function returns an ordered array of the available degreeIds defaulting to starting at root', () => {
  const expectedArray = [
    DegreeIds.Root, DegreeIds.Flat2, DegreeIds.Second, DegreeIds.Flat3, DegreeIds.Third, DegreeIds.Fourth,
    DegreeIds.Flat5, DegreeIds.Fifth, DegreeIds.Flat6, DegreeIds.Sixth, DegreeIds.Flat7, DegreeIds.Seventh
  ]
  const orderedDegreeIdsProps: OrderedDegreeIdsProps = {
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
  const orderedDegreeIdsProps: OrderedDegreeIdsProps = {
    type: Orderables.Degree,
    origin: DegreeIds.Flat5,
  }
  const actualArray = getAscendingIds(orderedDegreeIdsProps)

  expect(actualArray).toEqual(expectedArray)
})

test('getDescendingIds function returns an ordered array of the available degreeIds defaulting to starting at root', () => {
  const expectedArray = [
    DegreeIds.Root, DegreeIds.Seventh, DegreeIds.Flat7, DegreeIds.Sixth, DegreeIds.Flat6, DegreeIds.Fifth,
    DegreeIds.Flat5, DegreeIds.Fourth, DegreeIds.Third, DegreeIds.Flat3, DegreeIds.Second, DegreeIds.Flat2
  ]
  const orderedDegreeIdsProps: OrderedDegreeIdsProps = {
    type: Orderables.Degree,
  }
  const actualArray = getDescendingIds(orderedDegreeIdsProps)

  expect(actualArray).toEqual(expectedArray)
})

test('getDescendingDegreeIds function returns an ordered array of the available degreeIds starting from an input value', () => {
  const expectedArray = [
    DegreeIds.Flat5, DegreeIds.Fourth, DegreeIds.Third, DegreeIds.Flat3, DegreeIds.Second, DegreeIds.Flat2,
    DegreeIds.Root, DegreeIds.Seventh, DegreeIds.Flat7, DegreeIds.Sixth, DegreeIds.Flat6, DegreeIds.Fifth
  ]
  const orderedDegreeIdsProps: OrderedDegreeIdsProps = {
    type: Orderables.Degree,
    origin: DegreeIds.Flat5,
  }
  const actualArray = getDescendingIds(orderedDegreeIdsProps)

  expect(actualArray).toEqual(expectedArray)
})

test('getAscendingIds function returns an ordered array of the available pitchesIds defaulting to starting at C', () => {
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

test('getAscendingIds function returns an ordered array of the available pitchIds starting at the parameterised origin', () => {
  const expectedArray = [
    PitchIds.Gb, PitchIds.G, PitchIds.Ab, PitchIds.A, PitchIds.Bb, PitchIds.B,
    PitchIds.C, PitchIds.Db, PitchIds.D, PitchIds.Eb, PitchIds.E, PitchIds.F,
  ]
  const orderedPitchIdsProps: OrderedPitchIdsProps = {
    type: Orderables.Pitch,
    origin: PitchIds.Gb,
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

test('getAscendingIds function returns an ordered array of the pozitionIds starting at the parameterised origin', () => {
  const expectedArray = [
    PozitionIds.Fifth, PozitionIds.Twelfth, PozitionIds.Seventh, PozitionIds.Second,
    PozitionIds.Ninth, PozitionIds.Fourth, PozitionIds.Eleventh, PozitionIds.Sixth,
    PozitionIds.First, PozitionIds.Eighth, PozitionIds.Third, PozitionIds.Tenth,
  ]
  const orderedPozitionIdsProps: OrderedPozitionIdsProps = {
    type: Orderables.Pozition,
    origin: PozitionIds.Fifth,
  }
  const actualArray = getAscendingIds(orderedPozitionIdsProps)

  expect(actualArray).toEqual(expectedArray)
})
