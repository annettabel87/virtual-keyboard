module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'unix',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    indent: 'off',
    'eol-last': ['error', 'never'],
  },
};