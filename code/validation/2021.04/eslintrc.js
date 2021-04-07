module.exports = {
  extends: [
    'airbnb-typescript',
    'prettier/@typescript-eslint',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'indent': ["error", 4],
    'react/jsx-indent': ["error", 4],
    'react/jsx-indent-props': ["error", 4],
  },
  parserOptions: {
    project: './tsconfig.json',
 }
};
