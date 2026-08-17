module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: "detect" } },
  rules: {
    "react/prop-types": "off", // proyecto en JS puro, sin TypeScript ni prop-types
    "react/react-in-jsx-scope": "off", // no necesario con el runtime automático de Vite/React 18
  },
};
