import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import tseslint from "typescript-eslint";

if (!Object.prototype.hasOwnProperty.call(Object.prototype, "getFilename")) {
  Object.defineProperty(Object.prototype, "getFilename", {
    value: function () {
      return this.filename || this.getPhysicalFilename?.() || "";
    },
    writable: true,
    configurable: true,
  });
}

export default defineConfig([
  ...nextCoreWebVitals,
  ...nextTypeScript,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/src/**"],
              message: "El alias @ ya apunta a src; importa desde @/ directamente.",
            },
            {
              group: ["../../**"],
              message: "Usa el alias @/ para imports que crucen subsistemas.",
            },
          ],
        },
      ],
      curly: "error",
      eqeqeq: ["error", "always"],
      "object-shorthand": "error",
      "prefer-const": "error",
    },
  },
  {
    files: ["*.cjs", "*.mjs", "*.js", "*.ts"],
    ...tseslint.configs.disableTypeChecked,
  },
  globalIgnores([".next/**", "coverage/**", "dist/**", "node_modules/**"]),
]);
