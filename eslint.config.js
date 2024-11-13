import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Asegúrate de cubrir también los archivos TS/TSX si los usas
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser, // Mantén las globals de browser
        jest: true, // Agrega Jest a las globales
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      // Agrega el plugin de Jest si lo deseas
      // eslint-disable-next-line no-undef
      jest: require('eslint-plugin-jest'),
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Puedes agregar reglas específicas de Jest si lo necesitas
      'jest/no-disabled-tests': 'warn', // Ejemplo de regla de Jest
    },
  },
]
