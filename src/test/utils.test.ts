import { getStringInfo, toUpperCase } from "../app/utils"

describe("Utils test suite", () => {
  it("should return upper case", () => {
    // Arrange
    const sut = toUpperCase
    const expected = "HELLO WORLD"

    // Act
    const actual = sut("hello world")

    // Assert
    expect(actual).toBe(expected)
  })

  it("should return info for valid string", () => {
    const actual = getStringInfo("Hello world")

    expect(actual.lowerCase).toBe("hello world")
    expect(actual.extraInfo).toEqual({})

    expect(actual.characters.length).toBe(11)
    expect(actual.characters).toHaveLength(11)

    expect(actual.characters).toEqual(["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"])
    expect(actual.characters).toContain<string>("H")
    expect(actual.characters).toEqual(
      expect.arrayContaining(["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]),
    )

    expect(actual.extraInfo).not.toBe(undefined)
    expect(actual.extraInfo).not.toBeUndefined()
    expect(actual.extraInfo).toBeDefined()
    expect(actual.extraInfo).toBeTruthy()
  })
})
