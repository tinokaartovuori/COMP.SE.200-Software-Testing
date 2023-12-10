module.exports = {
    roots: ['<rootDir>/course_code/src', '<rootDir>/tests/unit_tests'],
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
    moduleFileExtensions: ['js', 'json', 'node'],
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
}
