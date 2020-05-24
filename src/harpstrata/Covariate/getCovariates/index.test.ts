import type { DeduceRootPitchProps } from '../deduceRootPitchId'
import type { DeducePozitionIdProps } from '../deducePozitionId'
import type { DeduceKeyPitchProps } from '../deduceHarpKeyId'
import { PozitionIds } from '../../Pozition'
import { PitchIds } from '../../Pitch'

import { getCovariates } from './index'

test('getCovariates returns the root pitch along with input harp key and pozition id control variables', () => {
  const { C: harpKeyId } = PitchIds
  const { Second: pozitionId } = PozitionIds
  const rootPitchControlProps: DeduceRootPitchProps = { harpKeyId, pozitionId }

  const expectedCovariates = { harpKeyId, pozitionId, rootPitchId: PitchIds.G }
  const actualCovariates = getCovariates(rootPitchControlProps)

  expect(actualCovariates).toEqual(expectedCovariates)
})

test('getCovariates returns the harp key along with input root pitch and pozition id control variables', () => {
  const { G: rootPitchId } = PitchIds
  const { Second: pozitionId } = PozitionIds
  const harpKeyControlProps: DeduceKeyPitchProps = { rootPitchId, pozitionId }

  const expectedCovariates = { rootPitchId, pozitionId, harpKeyId: PitchIds.C }
  const actualCovariates = getCovariates(harpKeyControlProps)

  expect(actualCovariates).toEqual(expectedCovariates)
})

test('getCovariates returns the pozition along with input root pitch and harp key id control variables', () => {
  const { G: rootPitchId } = PitchIds
  const { C: harpKeyId } = PitchIds
  const pozitionIdControlProps: DeducePozitionIdProps = { rootPitchId, harpKeyId }

  const expectedCovariates = { rootPitchId, pozitionId: PozitionIds.Second, harpKeyId }
  const actualCovariates = getCovariates(pozitionIdControlProps)

  expect(actualCovariates).toEqual(expectedCovariates)
})
