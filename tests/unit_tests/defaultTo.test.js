import defaultTo from '../../course_code/src/defaultTo'

describe('defaultTo function tests', () => {
    // Basic Functionality
    test('returns the original value when it is valid', () => {
        expect(defaultTo(1, 10)).toBe(1)
        expect(defaultTo('a', 'b')).toBe('a')
        expect(defaultTo(false, true)).toBe(false)
        expect(defaultTo(NaN, 10)).toBe(NaN)
        expect(defaultTo(0 / 0, 10)).toBe(NaN) // 0 / 0 is NaN
    })

    // Handling NaN, Null, and Undefined
    test('returns the default value for NaN, null, or undefined', () => {
        expect(defaultTo(null, 'default')).toBe('default')
        expect(defaultTo(undefined, false)).toBe(false)
    })

    // Falsy Values That Should Not Return Default
    test('handles other falsy values correctly', () => {
        expect(defaultTo(0, 10)).toBe(0)
        expect(defaultTo('', 'default')).toBe('')
        expect(defaultTo(false, 'fallback')).toBe(false)
    })

    // Complex Objects and Arrays
    test('returns original value for objects and arrays', () => {
        const obj = { key: 'value' }
        const arr = [1, 2, 3]
        expect(defaultTo(obj, null)).toEqual(obj)
        expect(defaultTo(arr, 'default')).toEqual(arr)
    })

    // Functions and Symbols
    test('handles functions and symbols', () => {
        const func = () => {}
        const sym = Symbol('sym')
        expect(defaultTo(func, 'default')).toBe(func)
        expect(defaultTo(sym, null)).toBe(sym)
    })

    // Extreme Edge Cases
    test('handles extreme edge cases', () => {
        expect(defaultTo(-0, 1)).toBe(-0) // -0 is a distinct value in JavaScript
        expect(defaultTo(BigInt(0), 1n)).toBe(BigInt(0)) // BigInt zero
    })

    // Handling Complex Default Values
    test('handles complex default values', () => {
        const defaultObj = { default: 'value' }
        const defaultFunc = () => 'default'
        expect(defaultTo(undefined, defaultObj)).toEqual(defaultObj)
        expect(defaultTo(null, defaultFunc)).toBe(defaultFunc)
    })

    // Default Value Same as Value Type
    test('handles default value of the same type as value', () => {
        expect(defaultTo(null, null)).toBe(null)
        expect(defaultTo(undefined, undefined)).toBe(undefined)
        expect(defaultTo(NaN, NaN)).toBeNaN()
    })
})
