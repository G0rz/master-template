"use strict";

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Also allow concise commit messages created from the IDE (for example,
    // "page.tsx") while preserving conventional-commit validation when a
    // type and subject are provided.
    "subject-empty": [0],
    "type-empty": [0],
  },
};
