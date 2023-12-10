import filter from '../../course_code/src/filter'

describe('filter function tests', () => {
    test('should filter out negative numbers', () => {
        const input = [1, -2, 3, -4, 5]
        const expectedOutput = [1, 3, 5]
        expect(filter(input, (x) => x > 0)).toEqual(expectedOutput)
    })
})
