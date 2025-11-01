import next from "eslint-config-next";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/out/**",
      "**/pnpm-lock.yaml",
    ],
  },
  ...next,
]);
