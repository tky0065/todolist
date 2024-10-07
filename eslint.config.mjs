// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jestPlugin from 'eslint-plugin-jest';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    // ESLint plugin for Jest
    {
        files: ['**/*.test.ts'],
        ...jestPlugin.configs['flat/recommended']
    }
);