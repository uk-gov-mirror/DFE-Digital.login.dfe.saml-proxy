module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ['jest'],
  rules: {
  },
};
