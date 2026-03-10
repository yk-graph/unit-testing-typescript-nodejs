## AAA Pattern and SUT in Unit Testing

### What is AAA Pattern?

AAA stands for Arrange-Act-Assert. It is a common pattern for structuring unit tests.

| Phase | Description |
|-------|-------------|
| Arrange | Set up the test data and conditions |
| Act | Execute the code being tested |
| Assert | Verify the result matches expectations |

### What is SUT?

SUT stands for System Under Test. It refers to the specific function, method, or class being tested.

Using `sut` as a variable name makes it clear what is being tested.

### Example

```typescript
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
```

### Benefits

### Clear Structure

Each test follows a predictable pattern, making it easy to read and understand.

### Explicit Test Target

Using `sut` makes it immediately clear what function or class is being tested.

### Consistent Naming

Using `expected` and `actual` as variable names:
- `expected`: The value you expect to get
- `actual`: The value you actually get from running the code

This naming convention helps quickly identify what went wrong when a test fails.

### Team Consistency

When everyone follows the same pattern, code reviews become easier and tests are more maintainable.
