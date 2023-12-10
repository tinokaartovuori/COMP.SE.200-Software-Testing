import keys from '../../course_code/src/keys'

describe('keys function tests', () => {
    // Testing with Plain Objects
    test('retrieves keys from a plain object', () => {
        expect(keys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c'])
    })

    // Testing with Objects Having Inherited Properties
    function Foo() {
        this.a = 1
        this.b = 2
    }
    Foo.prototype.c = 3
    test('ignores inherited properties', () => {
        expect(keys(new Foo())).toEqual(['a', 'b'])
    })

    // Testing with Array-like Objects
    test('handles array-like objects', () => {
        expect(keys('hi')).toEqual(['0', '1'])
        expect(keys([1, 2, 3])).toEqual(['0', '1', '2'])
    })

    // Testing with Empty Objects
    test('returns an empty array for empty objects', () => {
        expect(keys({})).toEqual([])
        expect(keys([])).toEqual([])
    })

    // Testing with Non-Object Values
    test('handles non-object values', () => {
        expect(keys(42)).toEqual([])
        expect(keys(null)).toEqual([])
        expect(keys(undefined)).toEqual([])
    })

    // Testing with Objects with Non-Enumerable Properties
    test('does not include non-enumerable properties', () => {
        const obj = Object.create({}, { a: { value: 1, enumerable: true }, b: { value: 2, enumerable: false } })
        expect(keys(obj)).toEqual(['a'])
    })

    // Testing with Complex Objects
    test('handles complex objects', () => {
        const complexObj = { a: [1, 2], b: { c: 3, d: 4 }, e: 'string' }
        expect(keys(complexObj)).toEqual(['a', 'b', 'e'])
    })

    // Testing with Objects Having Symbol Properties
    test('ignores symbol properties', () => {
        const sym = Symbol('sym')
        const objWithSymbol = { [sym]: 'symbol', a: 'regular' }
        expect(keys(objWithSymbol)).toEqual(['a'])
    })
})
