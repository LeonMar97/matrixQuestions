module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Enables Prettier formatting rules
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module', // Ensures support for ES Modules (import/export)
  },
  rules: {
    'prettier/prettier': 'error', // Ensures Prettier formatting is enforced
  },
};
