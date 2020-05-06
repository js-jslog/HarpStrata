import { IsActiveIds } from '../types'
import type { IsActiveProps } from '../types'
import { EXAMPLE_STRATA } from '../../testResources'
import { C, D, E, F, PitchIds } from '../../Pitch'
import { ROOT, SECOND, THIRD, FOURTH, DegreeIds } from '../../Degree'

import { getIsActiveMatrix } from './index'

const degreeMatrix = [
  [ ROOT , SECOND ],
  [ THIRD, FOURTH ],
]
const pitchMatrix = [
  [ C, D ],
  [ E, F ],
]
const baseIsActiveProps: IsActiveProps = {
  degreeMatrix, pitchMatrix, activeElementIds: []
}

test('getIsActiveMatrix returns the IsActiveMatrix when given an empty array or active elements', () => {
  const expectedIsActiveMatrix = [
    [ IsActiveIds.Inactive  , IsActiveIds.Inactive ],
    [ IsActiveIds.Inactive, IsActiveIds.Inactive   ],
  ]
  const actualIsActiveMatrix = getIsActiveMatrix(baseIsActiveProps)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})

test('getIsActiveMatrix returns the IsActiveMatrix when given Degree Elements', () => {
  const isActiveProps = { ...baseIsActiveProps, activeElementIds: [ DegreeIds.Root, DegreeIds.Fourth ] }
  const expectedIsActiveMatrix = [
    [ IsActiveIds.Active  , IsActiveIds.Inactive ],
    [ IsActiveIds.Inactive, IsActiveIds.Active   ],
  ]
  const actualIsActiveMatrix = getIsActiveMatrix(isActiveProps)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})

test('getIsActiveMatrix returns the IsActiveMatrix when given Pitch Elements', () => {
  const isActiveProps = { ...baseIsActiveProps, activeElementIds: [ PitchIds.D, PitchIds.E ] }
  const expectedIsActiveMatrix = [
    [ IsActiveIds.Inactive  , IsActiveIds.Active ],
    [ IsActiveIds.Active, IsActiveIds.Inactive   ],
  ]
  const actualIsActiveMatrix = getIsActiveMatrix(isActiveProps)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})

test('getIsActiveMatrix returns the IsActiveMatrix including undefined when given Pitch Elements', () => {
  const degreeMatrix = [
    [ undefined , SECOND ],
    [ THIRD, FOURTH ],
  ]
  const pitchMatrix = [
    [ undefined, D ],
    [ E, F ],
  ]
  const isActiveProps = { degreeMatrix, pitchMatrix, activeElementIds: [ PitchIds.D, PitchIds.E ] }
  const expectedIsActiveMatrix = [
    [ undefined         , IsActiveIds.Active     ],
    [ IsActiveIds.Active, IsActiveIds.Inactive   ],
  ]
  const actualIsActiveMatrix = getIsActiveMatrix(isActiveProps)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})


//test('getIsActiveMatrix returns the IsActiveMatrix when given Degree elements against large element matrices', () => {
//  const { C_MAJOR_DIATONIC_FIRST_POZITION } = EXAMPLE_STRATA
//  const { degreeMatrix, pitchMatrix, isActiveComplex: { isActiveMatrix: exampleIsActiveMatrix, activeDegreeIds: exampleDegreeIds }} = C_MAJOR_DIATONIC_FIRST_POZITION
//
//  const isActiveProps = { degreeMatrix, pitchMatrix, activeElementIds: exampleDegreeIds }
//  const actualIsActiveMatrix = getIsActiveMatrix(isActiveProps)
//
//  expect(actualIsActiveMatrix).toStrictEqual(exampleIsActiveMatrix)
//})
