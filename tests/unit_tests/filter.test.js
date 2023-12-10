import filter from '../../course_code/src/filter'

describe('filter function tests', () => {
    // Basic Functionality Tests
    test('filters a simple array based on a predicate', () => {
        const array = [1, 2, 3, 4, 5]
        const predicate = (value) => value > 3
        expect(filter(array, predicate)).toEqual([4, 5])
    })

    test('filters an array of objects based on a predicate', () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'fred', active: false },
        ]
        const predicate = ({ active }) => active
        expect(filter(users, predicate)).toEqual([{ user: 'barney', active: true }])
    })

    // Test for string input
    test('treats string as an array of characters', () => {
        const string = 'hello'
        const predicate = (char) => char !== 'l'
        // Expecting the function to treat the string 'hello' as ['h', 'e', 'l', 'l', 'o']
        // and filter out 'l's, resulting in ['h', 'e', 'o']
        expect(filter(string, predicate)).toEqual(['h', 'e', 'o'])
    })

    // Edge Cases Tests
    test('returns an empty array when given an empty array', () => {
        expect(filter([], (value) => value)).toEqual([[]])
    })

    test('handles single-element array', () => {
        expect(filter([3], (value) => value > 2)).toEqual([3])
    })

    test('returns all elements if all match predicate', () => {
        const array = [1, 2, 3]
        expect(filter(array, (value) => value > 0)).toEqual([1, 2, 3])
    })

    test('returns empty array if no elements match predicate', () => {
        const array = [1, 2, 3]
        expect(filter(array, (value) => value > 3)).toEqual([[]])
    })

    // Type and Error Handling Tests
    test('returns empty array when input is not an array', () => {
        expect(filter(null, (value) => value)).toEqual([[]])
        expect(filter('', (value) => value)).toEqual([[]])
        expect(filter({}, (value) => value)).toEqual([[]])
    })

    test('throws TypeError when predicate is not a function', () => {
        const array = [1, 2, 3]
        // Testing with null as predicate
        expect(() => filter(array, null)).toThrow(TypeError)
        expect(() => filter(array, 'not a function')).toThrow(TypeError)
    })

    // Predicate Function Tests
    test('predicate function using index', () => {
        const array = [10, 20, 30, 40]
        const predicate = (value, index) => index < 2
        expect(filter(array, predicate)).toEqual([10, 20])
    })

    test('predicate function using the entire array', () => {
        const array = [1, 2, 3, 4]
        const predicate = (value, index, arr) => arr.length === 4
        expect(filter(array, predicate)).toEqual([1, 2, 3, 4])
    })

    // Performance and Limit Tests
    test('handles large arrays efficiently', () => {
        const largeArray = Array.from({ length: 10000 }, (_, i) => i)
        const predicate = (value) => value % 2 === 0
        expect(filter(largeArray, predicate)).toEqual(largeArray.filter(predicate))
    })

    test('handles complex predicates', () => {
        const complexArray = [
            { id: 1, name: 'A' },
            { id: 2, name: 'B' },
            { id: 3, name: 'A' },
        ]
        const predicate = (element) => element.name === 'A' && element.id > 1
        expect(filter(complexArray, predicate)).toEqual([{ id: 3, name: 'A' }])
    })
})
