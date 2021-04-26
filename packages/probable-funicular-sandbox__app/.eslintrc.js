module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 8, // to enable features such as async/await
    project: './tsconfig.json' // required for eslint-config-standard-with-typescript
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!prettier.config.js'],
  extends: [
    'eslint:recommended',
    'standard-with-typescript',
    'prettier/react', // Prettier plugin: React plugin
    'prettier/standard', // Prettier plugin: Standard plugin
    'prettier/@typescript-eslint', // Prettier plugin: typescript-eslint
    'plugin:prettier/recommended' // Prettier recommended rules
  ],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'standard-with-typescript',
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'prettier/react', // Prettier plugin: React plugin
        'prettier/standard', // Prettier plugin: Standard plugin
        'prettier/@typescript-eslint', // Prettier plugin: typescript-eslint
        'plugin:prettier/recommended' // Prettier recommended rules
      ],
      rules: {
        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',

        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',

        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',

        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': ['error'],

        // I suggest this setting for requiring return types on functions only where useful
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true
          }
        ]
      }
    }
  ]
}
