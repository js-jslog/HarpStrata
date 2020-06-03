import type { HarpKeyControllers, RootPitchControllers, PozitionControllers } from '../types'
import { PozitionIds } from '../../Pozition'
import { PitchIds } from '../../Pitch'

import { getCovariantSet } from './index'

test('getCovariantSet returns the root pitch along with input harp key and pozition id control variables', () => {
  const { C: harpKeyId } = PitchIds
  const { Fourth: pozitionId } = PozitionIds
  const rootPitchControlProps: RootPitchControllers = { harpKeyId, pozitionId }

  const expectedCovariants = { harpKeyId, pozitionId, rootPitchId: PitchIds.A }
  const actualCovariants = getCovariantSet(rootPitchControlProps)

  expect(actualCovariants).toEqual(expectedCovariants)
})

test('getCovariantSet returns the harp key along with input root pitch and pozition id control variables', () => {
  const { Bb: rootPitchId } = PitchIds
  const { Ninth: pozitionId } = PozitionIds
  const harpKeyControlProps: HarpKeyControllers = { rootPitchId, pozitionId }

  const expectedCovariants = { rootPitchId, pozitionId, harpKeyId: PitchIds.D }
  const actualCovariants = getCovariantSet(harpKeyControlProps)

  expect(actualCovariants).toEqual(expectedCovariants)
})

test('getCovariantSet returns the pozition along with input root pitch and harp key id control variables', () => {
  const { F: rootPitchId } = PitchIds
  const { C: harpKeyId } = PitchIds
  const pozitionIdControlProps: PozitionControllers = { rootPitchId, harpKeyId }

  const expectedCovariants = { rootPitchId, harpKeyId, pozitionId: PozitionIds.Twelfth }
  const actualCovariants = getCovariantSet(pozitionIdControlProps)

  expect(actualCovariants).toEqual(expectedCovariants)
})
