module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript-prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./node_modules/'],
      },
    },
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'examples/**',
          'examples-native/**',
          '**/example/**',
          '*.js',
          '**/*.test.js',
          '**/*.stories.*',
          '**/scripts/*.js',
          '**/stories/**/*.js',
          '**/__tests__/**/*.js',
          '**/.storybook/**/*.*',
        ],
        peerDependencies: true,
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['@storybook'],
      },
    ],
    'import/order': [
      'error',
      {
        'alphabetize': {
          order: 'asc',
          caseInsensitive: false,
        },
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index', 'object'],
          'type',
        ],
        'newlines-between': 'always',
        'pathGroups': [
          {
            pattern: 'react',
            group: 'builtin',
          },
          {
            pattern: 'src/',
            group: 'internal',
          },
          {
            pattern: 'features/',
            group: 'internal',
          },
          {
            pattern: 'pages/',
            group: 'internal',
          },
          {
            pattern: 'components/',
            group: 'internal',
          },
        ],
        'pathGroupsExcludedImportTypes': ['react', 'react-native', 'type'],
      },
    ],
  },
};
