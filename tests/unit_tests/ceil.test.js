import ceil from '../../course_code/src/ceil'

describe('ceil function tests', () => {
    // Basic Functionality Tests
    test('rounds up numbers without precision specified', () => {
        expect(ceil(4.006)).toBe(5)
    })

    test('rounds up with positive precision', () => {
        expect(ceil(6.004, 2)).toBe(6.01)
    })

    test('rounds up with negative precision', () => {
        expect(ceil(6040, -2)).toBe(6100)
    })

    // Edge Cases and Special Values Tests
    test('handles floating point numbers', () => {
        expect(ceil(0.1234)).toBe(1)
    })

    test('handles large and small numbers', () => {
        expect(ceil(1e20)).toBe(1e20)
        expect(ceil(1e-20)).toBe(1)
    })

    test('handles zero and negative numbers', () => {
        expect(ceil(0)).toBe(0)
        expect(ceil(-5.95)).toBe(-5)
    })

    test('handles Infinity and Negative Infinity', () => {
        expect(ceil(Infinity)).toBe(Infinity)
        expect(ceil(-Infinity)).toBe(-Infinity)
    })

    test('handles NaN inputs', () => {
        expect(ceil(NaN)).toBeNaN()
    })

    // Precision Edge Cases Tests
    test('handles high precision numbers', () => {
        expect(ceil(10.123456, 5)).toBe(10.12346)
    })

    test('handles boundary precision values', () => {
        expect(ceil(1234.5678, Number.MAX_SAFE_INTEGER)).toBe(1234.5678)
        expect(ceil(1234.5678, Number.MIN_SAFE_INTEGER)).toBe(1e292) // 1e292 is the smallest number that can be represented in JS
    })

    // Error Handling and Robustness Tests
    test('handles non-numeric inputs', () => {
        expect(ceil('3.5')).toBe(4)
        expect(ceil({})).toBeNaN()
    })

    // Test for different precision values
    test('handles different precision value types', () => {
        expect(ceil(10.1234, '2')).toBe(10.13) // '2' is coerced to 2
        expect(ceil(10.1234, true)).toBe(10.2) // true is coerced to 1
        expect(ceil(10.1234, false)).toBe(11) // false is coerced to 0
        expect(ceil(10.1234, null)).toBe(11) // null is coerced to 0
        expect(ceil(10.1234, [])).toBe(11) // [] is coerced to 0
        expect(ceil(10.1234, {})).toBe(11) // {} is coerced to 0
    })

    test('handles undefined inputs', () => {
        expect(ceil(undefined)).toBeNaN()
    })

    test('handles null inputs', () => {
        expect(ceil(null)).toBe(0)
    })
})
