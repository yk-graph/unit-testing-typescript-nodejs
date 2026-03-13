import { getStringInfo, StringUtils, toUpperCase } from "../app/utils"

describe("Utils test suite", () => {
  describe.only("stringUtils test suite", () => {
    let sut: StringUtils

    beforeEach(() => {
      sut = new StringUtils()
    })

    it("should return correct upper case", () => {
      // Arrange
      const expected = "HELLO WORLD"

      // Act
      const actual = sut.toUpperCase("hello world")

      // Assert
      expect(actual).toBe(expected)
    })

    it("should throw error for invalid argument - arrow function", () => {
      // Assert
      expect(() => sut.toUpperCase("")).toThrow("Invalid argument")
    })

    it("should throw error for invalid argument - try/catch", () => {
      try {
        sut.toUpperCase("")
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect(error).toHaveProperty("message", "Invalid argument")
      }
    })
  })

  it("should return upper case", () => {
    // Arrange
    const sut = toUpperCase
    const expected = "HELLO WORLD"

    // Act
    const actual = sut("hello world")

    // Assert
    expect(actual).toBe(expected)
  })

  describe("ToUpperCase examples", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "My-String", expected: "MY-STRING" },
      { input: "def", expected: "DEF" },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const actual = toUpperCase(input)
      expect(actual).toBe(expected)
    })
  })

  describe("getStringInfo for arg My-String should", () => {
    test("return right length", () => {
      const actual = getStringInfo("My-String")
      expect(actual.characters).toHaveLength(9)
    })
    test("return right lower case", () => {
      const actual = getStringInfo("My-String")
      expect(actual.lowerCase).toBe("my-string")
    })
    test("return right upper case", () => {
      const actual = getStringInfo("My-String")
      expect(actual.upperCase).toBe("MY-STRING")
    })
    test("return right characters", () => {
      const actual = getStringInfo("My-String")
      expect(actual.characters).toEqual(["M", "y", "-", "S", "t", "r", "i", "n", "g"])
      expect(actual.characters).toContain<string>("M")
      expect(actual.characters).toEqual(
        expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"]),
      )
    })
    test("return defined extra info", () => {
      const actual = getStringInfo("My-String")
      expect(actual.extraInfo).toBeDefined()
    })

    test("return right extra info", () => {
      const actual = getStringInfo("My-String")
      expect(actual.extraInfo).toEqual({})
    })
  })
})
