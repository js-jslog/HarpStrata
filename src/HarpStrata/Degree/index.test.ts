import { MAJOR_DIATONIC_APPARATUS } from '../Apparatus/MAJOR_DIATONIC_APPARATUS'

import { EXAMPLE_DEGREES } from './testResources'
import { FOURTH } from './constants'

import { getDegreeMatrix } from './index'


test('getDegreeMatrix function maps a simple 2d array of 0\'s to 4th degrees (6) when halfsetp offset is 7', () => {
  const expectedArray = [[ FOURTH, ], [ FOURTH, ]]
  const actualArray = getDegreeMatrix([[ 0, ], [ 0, ]], 7)

  expect(actualArray).toStrictEqual(expectedArray)
})

test('getDegreeMatrix maps a major diatonic halfstepmatrix in to a major diatonic degreematrix in first position', () => {
  const { MAJOR_DIATONIC_FIRST_POSITION } = EXAMPLE_DEGREES
  const actualArray = getDegreeMatrix(MAJOR_DIATONIC_APPARATUS.halfsteps, 0)

  expect(actualArray).toStrictEqual(MAJOR_DIATONIC_FIRST_POSITION)
})

