import { toUpperCase } from '../app/utils'

describe('Utils test suite', () => {
  it('should return upper case', () => {
    // Arrange
    const sut = toUpperCase
    const expected = 'HELLO WORLD'

    // Act
    const actual = sut('hello world')

    // Assert
    expect(actual).toBe(expected)
  })
})
