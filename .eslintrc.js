module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'google',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
  ],
  rules: {
    'require-jsdoc': 'off',
    'semi': [2, 'always'],
    'no-unused-vars': ['warn'],
    'max-len': [0],
    'react/prop-types': [0],
    'n/handle-callback-err': [0],
  },
};
