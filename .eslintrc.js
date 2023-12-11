// .eslintrc.js
module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
      // Règles spécifiques TypeScript
      '@typescript-eslint/indent': ['error', 4], // Indentation de 2 espaces
      '@typescript-eslint/explicit-function-return-type': 'off', // Retour de type de fonction explicite
      '@typescript-eslint/no-explicit-any': 'off', // Interdiction de "any"
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }], // Variables non utilisées (en ignorant les variables dont le nom commence par "_")
      '@typescript-eslint/no-empty-function': 'off', // Autoriser les fonctions vides
    },
  };
  