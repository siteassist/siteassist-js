import baseConfig from "@siteassist/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**", "test/**", "scripts/**"],
  },
  ...baseConfig,
];
