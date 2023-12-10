import add from '../../course_code/src/add'

describe('add function tests', () => {
    // Basic Functionality Tests
    test('adds two numbers correctly', () => {
        expect(add(6, 4)).toBe(10)
    })

    test('correctly adds negative numbers', () => {
        expect(add(-2, -3)).toBe(-5)
    })

    test('adds zero correctly', () => {
        expect(add(5, 0)).toBe(5)
        expect(add(0, 0)).toBe(0)
    })

    // Edge Cases Tests
    test('handles floating point numbers', () => {
        expect(add(0.1, 0.2)).toBeCloseTo(0.3)
    })

    test('handles very large numbers', () => {
        expect(add(1e20, 1e20)).toBe(2e20)
    })

    test('handles non-numeric inputs', () => {
        expect(add('a', 'b')).toBe('ab')
    })

    // Type Conversion and Coercion Tests
    test('handles mixed type inputs', () => {
        expect(add('7', 3)).toBe('73')
    })

    test('converts booleans to numbers', () => {
        expect(add(true, false)).toBe(1)
        expect(add(true, true)).toBe(2)
        expect(add(false, false)).toBe(0)
    })

    // Default Value Handling Tests
    test('handles undefined inputs', () => {
        expect(add(undefined, 5)).toBe(5)
        expect(add(10, undefined)).toBe(10)
        expect(add(undefined, undefined)).toBe(0)
    })

    // Special Number Handling Tests
    test('handles Infinity and Negative Infinity', () => {
        expect(add(Infinity, 1)).toBe(Infinity)
        expect(add(-Infinity, -1)).toBe(-Infinity)
        expect(add(Infinity, -Infinity)).toBeNaN()
    })

    test('handles NaN inputs', () => {
        expect(add(NaN, 5)).toBeNaN()
        expect(add(10, NaN)).toBeNaN()
    })

    // String and Number Combination Tests
    test('handles empty strings and numbers', () => {
        // When adding a string and a number, the number is converted to a string
        expect(add('', 5)).toBe('5')
        expect(add('5', '')).toBe('5')
        expect(add('', '')).toBe('')
    })

    // Boundary Value Tests
    test('handles minimum and maximum safe integers', () => {
        expect(add(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1)
        expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1)
    })

    // Error Handling Tests
    test('handles non-numeric and non-string inputs', () => {
        expect(add({}, 10)).toBeNaN()
        expect(add([], 5)).toBe(5) // Adds 0 to 5
        expect(add(() => {}, 2)).toBeNaN()
    })
})
