import toNumber from '../../course_code/src/toNumber'

describe('toNumber function tests', () => {
    // Basic Number Conversion Tests
    test('converts basic numbers correctly', () => {
        expect(toNumber(3.2)).toBe(3.2)
        expect(toNumber(Number.MIN_VALUE)).toBe(5e-324)
        expect(toNumber(Infinity)).toBe(Infinity)
    })

    test('converts string representations of numbers', () => {
        expect(toNumber('3.2')).toBe(3.2)
        expect(toNumber('5e-324')).toBe(5e-324)
        expect(toNumber('Infinity')).toBe(Infinity)
    })

    // Edge Cases and Special Characters
    test('handles leading and trailing whitespace in strings', () => {
        expect(toNumber(' 3.2 ')).toBe(3.2)
        expect(toNumber(' \t\n5e-324\n\t ')).toBe(5e-324)
    })

    // Hexadecimal, Binary, and Octal Strings
    test('handles hexadecimal, binary, and octal strings', () => {
        expect(toNumber('0x1A')).toBe(26)
        expect(toNumber('0b1010')).toBe(10)
        expect(toNumber('0o52')).toBe(42)
    })

    test('returns NaN for invalid hexadecimal strings', () => {
        expect(toNumber('-0x2G')).toBeNaN()
    })

    // Handling of Non-Number Types
    test('returns NaN for symbols', () => {
        expect(toNumber(Symbol('sym'))).toBeNaN()
    })

    test('converts objects to numbers', () => {
        expect(toNumber({ valueOf: () => 42 })).toBe(42)
        expect(toNumber([3])).toBe(3)
    })

    test('handles non-coercible objects', () => {
        const obj = { valueOf: () => ({}) }
        expect(toNumber(obj)).toBeNaN()
    })

    // Zero and NaN
    test('handles zero correctly', () => {
        expect(toNumber(0)).toBe(0)
        expect(toNumber('0')).toBe(0)
    })

    test('identifies NaN correctly', () => {
        expect(toNumber(NaN)).toBeNaN()
        expect(toNumber('NaN')).toBeNaN()
    })

    // Handling Other Edge Cases
    test('handles undefined and null', () => {
        expect(toNumber(undefined)).toBeNaN()
        expect(toNumber(null)).toBe(0)
    })

    test('handles booleans', () => {
        expect(toNumber(true)).toBe(1)
        expect(toNumber(false)).toBe(0)
    })

    // Complex Number Conversions
    test('handles complex number conversions', () => {
        expect(toNumber('3.14159')).toBe(3.14159)
        expect(toNumber('0.1e2')).toBe(10)
    })
})
