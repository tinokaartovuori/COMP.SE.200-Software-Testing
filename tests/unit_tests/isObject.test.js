import isObject from '../../course_code/src/isObject'

describe('isObject function tests', () => {
    // Basic Object Type Tests
    test('identifies plain objects', () => {
        expect(isObject({})).toBe(true)
    })

    test('identifies arrays', () => {
        expect(isObject([])).toBe(true)
    })

    test('identifies function objects', () => {
        const namedFunction = function testFunction() {}
        const anonymousFunction = function () {}
        const arrowFunction = () => {}
        expect(isObject(namedFunction)).toBe(true)
        expect(isObject(anonymousFunction)).toBe(true)
        expect(isObject(arrowFunction)).toBe(true)
    })

    test('identifies regex objects', () => {
        expect(isObject(/abc/)).toBe(true)
    })

    // Primitive Types Tests
    test('returns false for primitive types', () => {
        expect(isObject(0)).toBe(false)
        expect(isObject('')).toBe(false)
        expect(isObject(true)).toBe(false)
        expect(isObject(undefined)).toBe(false)
        expect(isObject(null)).toBe(false)
    })

    test('identifies object instances of primitives', () => {
        expect(isObject(new Number(0))).toBe(true)
        expect(isObject(new String(''))).toBe(true)
        expect(isObject(new Boolean(false))).toBe(true)
    })

    // Special Object Types
    test('identifies Date objects', () => {
        expect(isObject(new Date())).toBe(true)
    })

    test('identifies Error objects', () => {
        expect(isObject(new Error())).toBe(true)
    })

    // Edge Cases and Special Values Tests
    test('handles NaN and Infinity', () => {
        expect(isObject(NaN)).toBe(false)
        expect(isObject(Infinity)).toBe(false)
    })

    // Instances of Custom Classes
    test('identifies instances of custom classes', () => {
        class MyClass {}
        expect(isObject(new MyClass())).toBe(true)

        class AnotherClass {
            constructor() {
                this.property = 'value'
            }
        }
        expect(isObject(new AnotherClass())).toBe(true)
    })

    // Testing with Empty and Non-Empty Values
    test('handles empty and non-empty values', () => {
        expect(isObject([])).toBe(true) // empty array
        expect(isObject([1, 2, 3])).toBe(true) // non-empty array
        expect(isObject('')).toBe(false) // empty string
        expect(isObject('text')).toBe(false) // non-empty string
        expect(isObject({})).toBe(true) // empty object
        expect(isObject({ key: 'value' })).toBe(true) // non-empty object
    })

    // Testing with Inherited Properties
    test('identifies objects with inherited properties', () => {
        function Parent() {
            this.parentProperty = 'parent'
        }
        function Child() {}
        Child.prototype = new Parent()
        expect(isObject(new Child())).toBe(true)
    })

    // Testing with Implicit Type Coercion
    test('identifies objects with implicit type coercion', () => {
        expect(isObject(Object(5))).toBe(true)
        expect(isObject(Object(false))).toBe(true)
    })

    // Testing with Non-Standard Inputs
    test('handles non-standard inputs', () => {
        expect(isObject(() => {})).toBe(true)
        expect(isObject(Symbol('symbol'))).toBe(false)
        expect(isObject([])).toBe(true)
    })
})
