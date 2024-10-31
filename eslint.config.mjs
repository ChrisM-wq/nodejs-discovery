import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
    rules: {
      // "no-console": "warn",
      "eqeqeq": "error",
      "no-unused-vars": "warn",
      "indent": ["error", 2],
      // "quotes": ["error", "double"],
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
];