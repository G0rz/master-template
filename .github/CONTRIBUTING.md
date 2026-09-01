# Contributing to Master Template

Thank you for your interest in contributing to **Master Template**! We welcome bug reports, feature requests, documentation improvements, and code contributions.

Please review this guide before submitting an issue or pull request.

---

## Code of Conduct

We are committed to providing a welcoming, inclusive, and harassment-free environment for everyone. Please be respectful, constructive, and collaborative in all interactions.

---

## Reporting Issues and Bugs

Before opening a new issue, please search existing [Issues](https://github.com/G0rz/master-template/issues) to see if it has already been reported.

### Bug Reports

When reporting a bug, please include:

- A clear, descriptive title.
- Step-by-step instructions to reproduce the issue.
- Expected behavior vs. actual behavior.
- Environment details: Node.js version, pnpm version, OS, browser (if applicable).
- Relevant terminal logs or screenshots (with sensitive information redacted).

### Feature Requests

When suggesting an enhancement:

- Explain the problem or use case you are addressing.
- Describe the proposed solution and any alternatives considered.
- Detail who benefits from the feature.

> [!CAUTION]
> Never include access tokens, passwords, API keys, private URLs, `.env.local` files, or sensitive data in an Issue, PR, screenshot, or log.

---

## Development Workflow

### 1. Prerequisites

- **Node.js**: `>=24.0.0 <25`
- **pnpm**: `>=11.22.0 <12`

### 2. Fork and Clone

```bash
# Clone your fork
git clone https://github.com/<your-username>/master-template.git
cd master-template

# Install dependencies
pnpm install
```

### 3. Create a Branch

Use descriptive branch names following standard conventions:

- `feat/feature-name` for new features
- `fix/bug-name` for bug fixes
- `docs/update-readme` for documentation changes
- `refactor/component-name` for refactoring

```bash
git switch -c feat/my-improvement
```

### 4. Development Server

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000/en](http://localhost:3000/en) to view the application.

---

## Code Quality & Commit Guidelines

This repository enforces strict code quality checks via **Husky**, **ESLint**, **Prettier**, and **Commitlint**.

### Conventional Commits

All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```text
<type>(<optional scope>): <description>

[optional body]

[optional footer]
```

#### Common Types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semicolons, etc. (no code logic change)
- `refactor`: Refactoring production code
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build tasks, dependencies, tooling

**Examples:**

- `feat(i18n): add french language support`
- `fix(navbar): resolve contrast issue in light mode`
- `docs(readme): add deploy button for vercel`

---

## Quality Checks & Verification

Before submitting your PR, run the full verification suite to ensure all tests, types, formatting, and lint rules pass:

```bash
# Run format check, lint, typecheck, and unit tests
pnpm run check

# Build production bundle
pnpm run build
```

---

## Submitting a Pull Request

1. Push your branch to your fork:
   ```bash
   git push origin feat/my-improvement
   ```
2. Open a Pull Request against the `main` branch of the upstream repository.
3. Fill out the PR description with:
   - What was changed and why.
   - Related issue number (e.g., `Closes #12`).
   - Screenshots / videos for visual UI changes (both light and dark mode).
   - How the changes were tested.
4. Wait for the automated GitHub Actions CI checks to pass.
5. Address any review feedback collaboratively.

Thank you for helping make Master Template better! 🚀
