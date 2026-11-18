/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-html/astro"],
  ignoreFiles: ["dist/**", ".astro/**"],
  rules: {
    "no-descending-specificity": null,
    "custom-property-pattern": [
      "^_?[a-z][a-z0-9]*(-[a-z0-9]+)*$",
      {
        message: (name) =>
          `Expected "${name}" to be kebab-case, optionally prefixed with "_"`,
      },
    ],
  },
};
