/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  roots: ["./"],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/__tests__/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/*.d.ts",
  ],
};
