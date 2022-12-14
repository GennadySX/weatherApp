module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 0,
    'no-alert': 'off',
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 'warn',
    curly: 'off',
    'no-shadow': 'warn',
    'no-extra-boolean-cast': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
