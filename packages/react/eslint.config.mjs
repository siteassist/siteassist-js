import baseConfig from "@siteassist/eslint-config/base";
import reactConfig from "@siteassist/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
