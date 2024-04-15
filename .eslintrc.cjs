module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended"
  ],
  globals: { axios: "readonly", dateFns: "readonly" },
  ignorePatterns: [
    "!.*",
    "coverage/**",
    "node_modules/**",
    "exercises/week-1/**",
    "exercises/week-2/**",
    "exercises/week-3/**",
    "exercises/week-4/**",
    "exercises/week-5/**",
    "exercises/week-6/**",
    "projects/minecraft/**",
    "projects/project-03-06/**"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    project: "tsconfig.json",
    sourceType: "module"
  },
  plugins: ["only-warn", "sort-imports-requires", "spellcheck"],
  rules: {
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-misused-promises": "warn",
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "avoid",
        endOfLine: "lf",
        quoteProps: "preserve",
        trailingComma: "none"
      }
    ],
    "sort-imports-requires/sort-imports": ["warn", { unsafeAutofix: true }],
    "sort-imports-requires/sort-requires": ["warn", { unsafeAutofix: true }],
    "spellcheck/spell-checker": [
      "warn",
      {
        "comments": true,
        "strings": true,
        "identifiers": true,
        "templates": true,
        "lang": "en_US",
        "skipWords": [
          "afterend",
          "apikey",
          "autofix",
          "aviv",
          "axios",
          "commonjs",
          "dec",
          "ecma",
          "eee",
          "favicons",
          "globals",
          "jsx",
          "keyof",
          "lang",
          "minecraft",
          "parens",
          "randomuser",
          "readonly",
          "req",
          "rerender",
          "str",
          "subdomain",
          "tsconfig",
          "typeof",
          "uuidv4"
        ],
        "minLength": 3
      }
    ]
  }
};
