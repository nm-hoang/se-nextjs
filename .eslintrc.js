/** @format */

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  extends: [
    'prettier',
    'plugin:eslint/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier', 'react', 'react-hook'],
  // add your custom rules here
  rules: {
    'react/prop-types': ['error'],
    'react-hooks/rules-of-hooks': ['error'],
    'react-hooks/exhaustive-deps': ['warn'],
  },
}
