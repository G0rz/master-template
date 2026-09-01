<div align="center">

# ⚡ Master Template

### A production-focused foundation for modern Next.js applications

[![Next.js](https://img.shields.io/badge/Next.js-16.3-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11.22-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)

Internationalization · Dark mode · Testing · Code quality · CI · Docker

[Quick start](#-quick-start) · [Customization](#-customization) · [Commands](#-available-commands) · [Contributing](#-contributing)

</div>

---

## What is included?

Master Template is a reusable starting point for web applications built with Next.js, React, and TypeScript. It provides a practical project structure, reusable UI components, multilingual routing, automated quality checks, and a production-oriented Docker setup.

| Area                     | Included                                                                         |
| ------------------------ | -------------------------------------------------------------------------------- |
| **Application**          | Next.js App Router, React Server Components, typed routes, and standalone output |
| **Design system**        | Tailwind CSS, Base UI, shadcn, theme switching, and reusable components          |
| **Internationalization** | English and Spanish routes and message catalogs with next-intl                   |
| **SEO**                  | Metadata, sitemap, robots.txt, manifest, Open Graph, and structured data         |
| **Quality**              | TypeScript strict mode, ESLint, Prettier, Vitest, and Git hooks                  |
| **Delivery**             | GitHub Actions CI, Docker image, health check, and non-root runtime              |

> [!IMPORTANT]
> This is a starting point, not a finished product. Replace the sample branding, metadata, links, translations, icons, and environment values before deploying your application.

## Technology stack

| Technology              | Purpose                                                   |
| ----------------------- | --------------------------------------------------------- |
| **Next.js 16.3**        | Full-stack framework, App Router, and `standalone` output |
| **React 19**            | User interface and Server Components                      |
| **TypeScript 5**        | Strict static typing                                      |
| **Tailwind CSS 4**      | Styling and design tokens                                 |
| **Base UI + shadcn**    | Accessible, reusable UI components                        |
| **next-intl**           | Localized routing and translations                        |
| **next-themes**         | Light, dark, and system themes                            |
| **Vitest**              | Unit testing                                              |
| **ESLint + Prettier**   | Code analysis and formatting                              |
| **Husky + lint-staged** | Automated Git checks                                      |
| **Commitlint**          | Commit-message validation                                 |
| **Docker**              | Optimized production container                            |
| **GitHub Actions**      | Continuous integration                                    |

## Requirements

- **Node.js 24.x** (`>=24.0.0 <25`)
- **pnpm 11.22.x** (`>=11.22.0 <12`)
- **Git**
- **Docker and Docker Compose** only when using containers

The repository includes `.node-version` and pins pnpm in `package.json`. If pnpm is not installed, enable it through Corepack:

```bash
corepack enable
corepack prepare pnpm@11.22.0 --activate
```

> [!NOTE]
> Using the declared Node.js and pnpm versions helps keep local development, CI, and Docker builds consistent.

## Quick start

Use GitHub's **Use this template** button, or clone the repository and replace its remote:

```bash
git clone <REPOSITORY_URL> my-project
cd my-project
git remote set-url origin <NEW_REPOSITORY_URL>
pnpm install
```

Create the local environment file:

```bash
cp .env.example .env.local
```

On PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Start the development server:

```bash
pnpm run dev
```

Open <http://localhost:3000>. The default localized routes are `/en` and `/es`; English is the default locale.

> [!TIP]
> After creating your project, update `package.json`, `.env.local`, `src/lib/site-config.ts`, the files in `messages/`, and the icons in `public/` and `src/app/`.

## Environment variables

| Variable                       | Description                                   | Default                 |
| ------------------------------ | --------------------------------------------- | ----------------------- |
| `NODE_ENV`                     | Runtime environment                           | `development`           |
| `NEXT_PUBLIC_SITE_URL`         | Public canonical URL without a trailing slash | `http://localhost:3000` |
| `NEXT_PUBLIC_SITE_NAME`        | Name used in metadata and the web manifest    | `Master Template`       |
| `NEXT_PUBLIC_SITE_DESCRIPTION` | Description used for SEO                      | Template description    |
| `NEXT_PUBLIC_SITE_AUTHOR`      | Author or organization                        | `Leonardo Becerril`     |
| `NEXT_PUBLIC_SITE_LOCALE`      | Public site locale                            | Optional                |

> [!WARNING]
> Never store secrets in variables beginning with `NEXT_PUBLIC_`. Next.js exposes them to the browser. Do not commit `.env.local` to the repository.

## Available commands

| Command                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| `pnpm run dev`          | Start the development server                    |
| `pnpm run build`        | Create a production build                       |
| `pnpm run start`        | Run an existing production build                |
| `pnpm run lint`         | Analyze the project with ESLint                 |
| `pnpm run lint:fix`     | Automatically fix supported lint problems       |
| `pnpm run format`       | Format files with Prettier                      |
| `pnpm run format:check` | Check formatting without changing files         |
| `pnpm run typecheck`    | Check TypeScript types                          |
| `pnpm run test`         | Run Vitest in watch mode                        |
| `pnpm run test:run`     | Run the test suite once                         |
| `pnpm run check`        | Run formatting, linting, type checks, and tests |

### Production check

Run the complete verification before publishing changes:

```bash
pnpm run check
pnpm run build
```

> [!TIP]
> `pnpm run check` is the fastest way to catch formatting, lint, type, and test failures before opening a pull request.

## Docker

Build the image and start the application at <http://localhost:3000>:

```bash
docker compose up --build
```

Stop and remove the service:

```bash
docker compose down
```

The container uses Next.js standalone output, runs as a non-root user, and exposes `/api/health` for health checks.

## Customization

### Languages

Locales are defined in `src/i18n/routing.ts`. Translation catalogs live in `messages/en.json` and `messages/es.json`.

To add another language:

1. Add its locale code to `locales`.
2. Create the matching catalog inside `messages/`.
3. Review localized metadata, the sitemap, and navigation.

### Appearance and components

- Global styles and design tokens: `src/app/globals.css`
- Theme and internationalization providers: `src/lib/providers.tsx`
- UI components: `src/components/ui/`
- Navigation and footer: `src/components/layout/`
- shadcn configuration: `components.json`

Add a shadcn component with:

```bash
pnpm dlx shadcn@latest add <component>
```

### SEO and metadata

General site data comes from `.env.local` and `src/lib/site-config.ts`. The template includes a web manifest, `robots.txt`, a localized sitemap, Open Graph images, and structured data.

> [!IMPORTANT]
> Replace every sample URL, author name, social link, description, and image before going live. Incorrect canonical or social metadata can negatively affect indexing and link previews.

## Project structure

```text
.
|-- .github/workflows/ci.yml    # Continuous integration
|-- .husky/                     # Git hooks
|-- messages/                   # English and Spanish translations
|-- public/                     # Static assets
|-- src/
|   |-- app/
|   |   |-- [locale]/           # Localized layout, page, and Open Graph image
|   |   |-- api/health/         # Health-check endpoint
|   |   |-- globals.css         # Global styles and design tokens
|   |   |-- manifest.ts         # Web app manifest
|   |   |-- robots.ts           # Search-engine rules
|   |   `-- sitemap.ts          # Localized sitemap
|   |-- components/             # Layout, SEO, and UI components
|   |-- i18n/                   # next-intl configuration
|   |-- lib/                    # Environment, config, providers, and utilities
|   `-- proxy.ts                # Internationalized routing
|-- compose.yml                 # Docker service
|-- Dockerfile                  # Production image
|-- next.config.ts              # Next.js configuration
|-- package.json                # Dependencies and scripts
`-- vitest.config.mts           # Test configuration
```

## Code quality and Git workflow

Installing dependencies configures Husky automatically:

- **pre-commit** runs ESLint and Prettier on staged files.
- **commit-msg** validates messages with Commitlint. It accepts concise messages and Conventional Commit messages such as `feat: add pricing section`.
- **pre-push** runs TypeScript checks and ESLint.

GitHub Actions repeats formatting, linting, type checks, tests, and the production build for pushes and pull requests targeting `main`.

## Ideas and bug reports

Search existing repository **Issues** before opening a new one.

For an idea or enhancement, include:

- The problem or need you want to address.
- Your proposed solution and possible alternatives.
- Who benefits from it.
- Any relevant visual or technical examples.

For a bug report, include:

- Minimal steps to reproduce the problem.
- Expected and actual behavior.
- Node.js, pnpm, browser, and operating-system versions.
- Error messages or screenshots with sensitive information removed.

> [!CAUTION]
> Never include access tokens, passwords, private URLs, environment files, or personal data in an Issue, screenshot, log, or pull request.

If Issues are not enabled, contact the repository maintainers through the channel listed in the project profile.

## Contributing

Contributions, corrections, and well-scoped ideas are welcome.

1. Fork the repository.
2. Create a branch from `main`: `git switch -c feat/my-improvement` or `git switch -c fix/my-fix`.
3. Install dependencies with `pnpm install`.
4. Make focused, documented changes and add tests when appropriate.
5. Run `pnpm run check` and `pnpm run build`.
6. Commit your changes.
7. Push the branch and open a pull request against `main`.

Your pull request should explain what changed, why it is needed, and how it was verified. Include before-and-after screenshots for visual changes. Do not include secrets, `.env.local`, generated dependencies, or unrelated changes.

> [!NOTE]
> Discuss architecture changes, new dependencies, and public behavior changes in an Issue first. Agreeing on scope before implementation saves time for contributors and maintainers.
> #   m a s t e r - t e m p l a t e 
>  
>  
