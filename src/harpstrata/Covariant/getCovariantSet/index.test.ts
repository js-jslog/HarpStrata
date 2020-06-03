import type { HarpKeyControllers, RootPitchControllers, PozitionControllers } from '../types'
import { PozitionIds } from '../../Pozition'
import { PitchIds } from '../../Pitch'

import { getCovariantSet } from './index'

test('getCovariantSet returns the root pitch along with the input controller members of the set', () => {
  const { C: harpKeyId } = PitchIds
  const { Fourth: pozitionId } = PozitionIds
  const rootPitchControlProps: RootPitchControllers = { harpKeyId, pozitionId }

  const expectedCovariantSet = { harpKeyId, pozitionId, rootPitchId: PitchIds.A }
  const actualCovariantSet = getCovariantSet(rootPitchControlProps)

  expect(actualCovariantSet).toEqual(expectedCovariantSet)
})

test('getCovariantSet returns the harp key along with the input controller members of the set', () => {
  const { Bb: rootPitchId } = PitchIds
  const { Ninth: pozitionId } = PozitionIds
  const harpKeyControlProps: HarpKeyControllers = { rootPitchId, pozitionId }

  const expectedCovariantSet = { rootPitchId, pozitionId, harpKeyId: PitchIds.D }
  const actualCovariantSet = getCovariantSet(harpKeyControlProps)

  expect(actualCovariantSet).toEqual(expectedCovariantSet)
})

test('getCovariantSet returns the pozition along with the input controller members of the set', () => {
  const { F: rootPitchId } = PitchIds
  const { C: harpKeyId } = PitchIds
  const pozitionIdControlProps: PozitionControllers = { rootPitchId, harpKeyId }

  const expectedCovariantSet = { rootPitchId, harpKeyId, pozitionId: PozitionIds.Twelfth }
  const actualCovariantSet = getCovariantSet(pozitionIdControlProps)

  expect(actualCovariantSet).toEqual(expectedCovariantSet)
})
