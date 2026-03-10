## Jest Matcher Functions

Matchers are methods that let you test values in different ways.

### Basic Matchers

| Matcher | Description | Example |
|---------|-------------|---------|
| `toBe(value)` | Strict equality (===) | `expect(1 + 1).toBe(2)` |
| `toEqual(value)` | Deep equality for objects/arrays | `expect({a: 1}).toEqual({a: 1})` |
| `toStrictEqual(value)` | Deep equality + checks undefined properties | `expect(obj).toStrictEqual({a: 1})` |

### Truthiness Matchers

| Matcher | Description | Example |
|---------|-------------|---------|
| `toBeNull()` | Matches only null | `expect(null).toBeNull()` |
| `toBeUndefined()` | Matches only undefined | `expect(undefined).toBeUndefined()` |
| `toBeDefined()` | Opposite of toBeUndefined | `expect(1).toBeDefined()` |
| `toBeTruthy()` | Matches truthy values | `expect(1).toBeTruthy()` |
| `toBeFalsy()` | Matches falsy values | `expect(0).toBeFalsy()` |

### Number Matchers

| Matcher | Description | Example |
|---------|-------------|---------|
| `toBeGreaterThan(n)` | value > n | `expect(10).toBeGreaterThan(5)` |
| `toBeGreaterThanOrEqual(n)` | value >= n | `expect(10).toBeGreaterThanOrEqual(10)` |
| `toBeLessThan(n)` | value < n | `expect(5).toBeLessThan(10)` |
| `toBeLessThanOrEqual(n)` | value <= n | `expect(5).toBeLessThanOrEqual(5)` |
| `toBeCloseTo(n, digits)` | For floating point comparison | `expect(0.1 + 0.2).toBeCloseTo(0.3)` |

### String Matchers

| Matcher | Description | Example |
|---------|-------------|---------|
| `toMatch(regex)` | Matches against regex or string | `expect('hello').toMatch(/ell/)` |
| `toContain(str)` | String contains substring | `expect('hello').toContain('ell')` |

### Array/Iterable Matchers

| Matcher | Description | Example |
|---------|-------------|---------|
| `toContain(item)` | Array contains item | `expect([1, 2, 3]).toContain(2)` |
| `toContainEqual(item)` | Array contains object equal to item | `expect([{a: 1}]).toContainEqual({a: 1})` |
| `toHaveLength(n)` | Checks length property | `expect([1, 2]).toHaveLength(2)` |

### Object Matchers

| Matcher | Description | Example |
|---------|-------------|---------|
| `toHaveProperty(key, value?)` | Object has property | `expect({a: 1}).toHaveProperty('a')` |
| `toMatchObject(obj)` | Object contains subset | `expect({a: 1, b: 2}).toMatchObject({a: 1})` |

### Exception Matchers

| Matcher | Description | Example |
|---------|-------------|---------|
| `toThrow()` | Function throws an error | `expect(() => fn()).toThrow()` |
| `toThrowError(message)` | Function throws specific error | `expect(() => fn()).toThrowError('error')` |

### Negation

Use `.not` to negate any matcher.

| Example | Description |
|---------|-------------|
| `expect(1).not.toBe(2)` | 1 is not 2 |
| `expect([1, 2]).not.toContain(3)` | Array does not contain 3 |

## Parameterized Tests with each

`it.each` and `test.each` allow you to run the same test with different inputs.

### Basic Syntax

```typescript
it.each([
  { input: "abc", expected: "ABC" },
  { input: "My-String", expected: "MY-STRING" },
  { input: "def", expected: "DEF" },
])("$input toUpperCase should be $expected", ({ input, expected }) => {
  const actual = toUpperCase(input)
  expect(actual).toBe(expected)
})
```

### How it Works

| Part | Description |
|------|-------------|
| `it.each([...])` | Accepts an array of test cases |
| `{ input, expected }` | Each object represents one test case |
| `"$input ... $expected"` | Template string uses `$` to reference properties |
| `({ input, expected })` | Destructure the test case object in the callback |

### Benefits

| Benefit | Description |
|---------|-------------|
| DRY | Write test logic once, run with multiple inputs |
| Readable | Test name shows actual values being tested |
| Maintainable | Easy to add new test cases |

### Alternative Syntax (Array Format)

```typescript
it.each([
  ["abc", "ABC"],
  ["My-String", "MY-STRING"],
  ["def", "DEF"],
])("toUpperCase(%s) should return %s", (input, expected) => {
  const actual = toUpperCase(input)
  expect(actual).toBe(expected)
})
```

| Placeholder | Description |
|-------------|-------------|
| `%s` | String |
| `%d` | Number |
| `%j` | JSON |
