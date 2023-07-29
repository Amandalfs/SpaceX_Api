import { Config } from 'jest'

const config: Config = 
{
    roots: ['<rootDir>/src/'],
    collectCoverageFrom: ['<rootDir>/src/**/*.spec.ts'],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest',
    },
    "testPathIgnorePatterns": ["node_modules", "prisma", "test", ".github", ".husky"]
}

export default config
