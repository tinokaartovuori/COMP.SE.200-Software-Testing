import camelCase from '../../course_code/src/camelCase'

describe('camelCase function tests', () => {
    // Basic Functionality Tests
    test('converts space-separated words to camelCase', () => {
        expect(camelCase('Foo Bar')).toBe(' fooBar')
    })

    test('converts hyphen-separated words to camelCase', () => {
        expect(camelCase('--foo-bar--')).toBe(' fooBar')
    })

    test('converts underscore-separated words to camelCase', () => {
        expect(camelCase('__FOO_BAR__')).toBe(' fooBar')
    })

    // Edge Cases and Special Characters
    test('handles strings with special characters', () => {
        expect(camelCase('foo*bar')).toBe(' fooBar')
        expect(camelCase('foo@bar')).toBe(' fooBar')
        expect(camelCase('foo#bar')).toBe(' fooBar')
    })

    test('handles mixed case strings', () => {
        expect(camelCase('Foo-BAR')).toBe(' fooBar')
        expect(camelCase('fOo BaR')).toBe(' fOoBaR')
    })

    // Numbers in Strings
    test('handles strings with numbers', () => {
        expect(camelCase('foo2bar')).toBe(' foo2Bar')
        expect(camelCase('foo2020bar')).toBe(' foo2020Bar')
    })

    // Empty and Whitespace Strings
    test('returns an empty string for empty input', () => {
        expect(camelCase('')).toBe(' ')
    })

    test('handles strings with only whitespaces', () => {
        expect(camelCase('   ')).toBe(' ')
        expect(camelCase('\t\n ')).toBe(' ')
    })

    // Non-String Inputs (Testing Type Coercion)
    test('handles non-string inputs', () => {
        expect(camelCase(null)).toBe(' null')
        expect(camelCase(undefined)).toBe(' undefined')
        expect(camelCase(123)).toBe(' 123')
        expect(camelCase({})).toBe(' objectObject')
    })

    // Complex Strings
    test('handles complex strings', () => {
        expect(camelCase('Foo-BAR_baz')).toBe(' fooBarBaz')
        expect(camelCase('--foo.bar;baz__qux-quux')).toBe(' fooBarBazQuxQuux')
    })
})
