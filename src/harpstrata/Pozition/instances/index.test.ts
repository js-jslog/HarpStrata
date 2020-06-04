import { instanceMap } from './index'

test('instanceMap is exported', () => {
  expect(instanceMap).toBeTruthy()
})

test('Pozition instanceMap has exactly 12 mappings', () => {
  expect(instanceMap.size).toBe(12)
})
