/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-html/astro"],
  ignoreFiles: ["dist/**", ".astro/**"],
  rules: {
    // Nesting makes unrelated selectors (e.g. `.container header p` vs
    // `blockquote p`) look like specificity conflicts.
    "no-descending-specificity": null,
  },
};
