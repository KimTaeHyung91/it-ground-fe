// https://velog.io/@kmlee95/React-Typescript-eslint-prettier%EC%84%A4%EC%A0%95
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["warn"],
        "no-shadow": "off", // Disallows variable declarations from shadowing variables declared in the outer scope. : off
      },
    },
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      "babel-module": {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
