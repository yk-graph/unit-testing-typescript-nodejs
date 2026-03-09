import { toUpperCase } from '../app/utils'

describe('Utils test suite', () => {
  it('should return upper case', () => {
    const result = toUpperCase('hello')
    expect(result).toBe('HELLO')
  })
})
