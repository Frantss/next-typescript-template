import type { InitialOptionsTsJest } from 'ts-jest/dist/types';

const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/tests/mocks/file-mock.ts',
    '\\.(css|less|scss)$': '<rootDir>/src/tests/mocks/file-mock.ts',
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@/modules(.*)$': '<rootDir>/src/modules$1',
    '^@/pages(.*)$': '<rootDir>/src/pages$1',
    '^@/styles(.*)$': '<rootDir>/src/styles$1',
    '^@/tests(.*)$': '<rootDir>/src/tests$1',
    '^@/types(.*)$': '<rootDir>/src/types$1',
    '^@/utils(.*)$': '<rootDir>/src/utils$1',
  },
};

export default config;
