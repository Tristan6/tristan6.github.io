module.exports = {
  root: true,

  env: {
    esnext: true
  },

  parser: "vue-eslint-parser",

  parserOptions: {
    ecmaVersion: "2020",
    parser: "@typescript-eslint/parser",
    exclude: ["node_modules"],
  },

  plugins: ["@typescript-eslint"],

  extends: [
    "plugin:vue/vue3-essential",
    "@vue/typescript/recommended",
    "@vue/typescript",
    "eslint:recommended"
  ],
};
