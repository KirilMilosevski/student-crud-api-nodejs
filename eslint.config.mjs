export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      // Add any custom rules here
      "no-unused-vars": "warn",
      "no-console": "off",
    }
  }
];
