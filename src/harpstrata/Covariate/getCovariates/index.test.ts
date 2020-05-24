import type { DeduceRootPitchProps } from '../deduceRootPitchId'
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
