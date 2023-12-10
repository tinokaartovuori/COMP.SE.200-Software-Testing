import isEmpty from '../../course_code/src/isEmpty'

describe('isEmpty function tests', () => {
    // Basic Functionality Tests
    test('returns true for null and undefined', () => {
        expect(isEmpty(null)).toBe(true)
        expect(isEmpty(undefined)).toBe(true)
    })

    test('returns true for primitive types', () => {
        expect(isEmpty(0)).toBe(true)
        expect(isEmpty(1)).toBe(true)
        expect(isEmpty(true)).toBe(true)
        expect(isEmpty(false)).toBe(true)
        expect(isEmpty(Symbol())).toBe(true)
        expect(isEmpty('')).toBe(true)
    })

    // Array-Like Objects Tests
    test('handles empty and non-empty arrays', () => {
        expect(isEmpty([])).toBe(true)
        expect(isEmpty([1, 2, 3])).toBe(false)
    })

    test('handles empty and non-empty strings', () => {
        expect(isEmpty('')).toBe(true)
        expect(isEmpty('text')).toBe(false)
    })

    // Arguments Object Test
    function testArguments() {
        expect(isEmpty(arguments)).toBe(arguments.length === 0)
    }
    testArguments()
    testArguments(1, 2, 3)

    // Object and Collection Tests
    test('handles plain objects', () => {
        expect(isEmpty({})).toBe(true)
        expect(isEmpty({ key: 'value' })).toBe(false)
    })

    test('handles maps and sets', () => {
        expect(isEmpty(new Map())).toBe(true)
        expect(isEmpty(new Map([['key', 'value']]))).toBe(false)
        expect(isEmpty(new Set())).toBe(true)
        expect(isEmpty(new Set([1]))).toBe(false)
    })

    // Special Cases and Edge Cases
    test('handles objects with length property', () => {
        expect(isEmpty({ length: 0 })).toBe(false)
        expect(isEmpty({ length: 10 })).toBe(false)
    })

    test('handles objects with size property', () => {
        expect(isEmpty({ size: 0 })).toBe(false)
        expect(isEmpty({ size: 5 })).toBe(false)
    })

    test('handles instances of custom classes', () => {
        class MyClass {}
        expect(isEmpty(new MyClass())).toBe(true)

        class MyNonEmptyClass {
            constructor() {
                this.prop = 1
            }
        }
        expect(isEmpty(new MyNonEmptyClass())).toBe(false)
    })

    // Instances of Built-in Types
    test('handles instances of built-in types', () => {
        expect(isEmpty(new Date())).toBe(true)
        expect(isEmpty(/regex/)).toBe(true)
    })

    // Complex Nested Structures
    test('handles nested objects and arrays', () => {
        expect(isEmpty({ nested: { key: 'value' } })).toBe(false)
        expect(isEmpty([[]])).toBe(false)
    })

    // Testing with Non-Enumerable Properties
    test('handles objects with non-enumerable properties', () => {
        const obj = Object.create({}, { nonEnumProp: { value: 1 } })
        expect(isEmpty(obj)).toBe(true)
    })

    // Error Handling and Robustness Tests
    test('handles non-standard inputs', () => {
        expect(isEmpty(function () {})).toBe(true)
        expect(isEmpty(new Date())).toBe(true)
        expect(isEmpty([[]])).toBe(false)
        expect(isEmpty([{}])).toBe(false)
    })
})
