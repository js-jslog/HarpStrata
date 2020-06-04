import { DegreeIds } from '../types'
import { EXAMPLE_DEGREE_MATRICES } from '../testResources'
import { getDegree } from '../getDegree'
import { ApparatusIds, getApparatus } from '../../Apparatus'

import { getDegreeMatrix } from './index'

const fourth = getDegree(DegreeIds.Fourth)

const MAJOR_DIATONIC_APPARATUS = getApparatus(ApparatusIds.MajorDiatonic)

test('getDegreeMatrix function maps a simple 2d array of 0\'s to 4th degrees when the starting DegreeId is Fourth', () => {
  const expectedArray = [[ fourth, ], [ fourth, ]]
  const actualArray = getDegreeMatrix([[ 0, ], [ 0, ]], DegreeIds.Fourth)

  expect(actualArray).toStrictEqual(expectedArray)
})

test('getDegreeMatrix maps a major diatonic halfstepmatrix in to a major diatonic degreematrix in first pozition', () => {
  const { MAJOR_DIATONIC_FIRST_POZITION } = EXAMPLE_DEGREE_MATRICES
  const actualArray = getDegreeMatrix(MAJOR_DIATONIC_APPARATUS.halfstepIndexMatrix, DegreeIds.Root)

  expect(actualArray).toStrictEqual(MAJOR_DIATONIC_FIRST_POZITION)
})
