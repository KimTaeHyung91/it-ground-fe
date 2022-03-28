// https://velog.io/@kmlee95/React-Typescript-eslint-prettier%EC%84%A4%EC%A0%95
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "eslint:recommended",
  ],
  rules: {
    "@typescript-eslint/no-var-requires": 0,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["warn"],
        "no-shadow": "off", // Disallows variable declarations from shadowing variables declared in the outer scope. : off
        "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/no-explicit-any": ["off"],
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
