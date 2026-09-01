# Master Template

[![Next.js](https://img.shields.io/badge/Next.js-16.2.10-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11.17.0-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](https://opensource.org/licenses/MIT)

This starter template is a **100 % production‑ready foundation** for any modern web project. It works out‑of‑the‑box for:

- SaaS platforms & admin dashboards
- Corporate portals & landing pages
- Multi‑language sites
- E‑commerce storefronts

---

## Tech Stack

The project ships with a carefully‑chosen set of libraries:

| Library / Framework      | Purpose                                                  |
| ------------------------ | -------------------------------------------------------- |
| **Next.js 16**           | Full‑stack React framework with RSC, Edge, and Turbopack |
| **React 19**             | Modern component model and concurrent features           |
| **TypeScript 5**         | Type‑safety across the whole codebase                    |
| **Tailwind CSS v4**      | Utility‑first styling with design tokens                 |
| **shadcn/ui**            | Accessible UI primitives built on Tailwind               |
| **next‑themes**          | Theme switching (light/dark)                             |
| **next‑intl**            | Internationalisation & localisation                      |
| **Vitest**               | Fast unit testing framework                              |
| **ESLint 9+ & Prettier** | Linting & code formatting                                |
| **Husky & lint‑staged**  | Git hooks for commit quality                             |
| **Commitlint**           | Enforces conventional commit messages                    |
| **Docker**               | Multi‑stage production images                            |
| **GitHub Actions**       | CI pipeline (type‑check, lint, test, build)              |

---

## Quick Start Guide

1. **Recommended Prerequisites**
   - **Node.js** >= 24 (LTS recommended)
   - **pnpm** >= 11.22

2. **Clone & Install**

   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd master
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Adjust NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SITE_NAME, etc. as needed
   ```

4. **Run development server**
   ```bash
   pnpm run dev
   ```
   Open <http://localhost:3000> in your browser.

---

## Available Commands

| Command                     | Description                                                     |
| --------------------------- | --------------------------------------------------------------- |
| `pnpm run dev`              | Start the development server (Turbopack)                        |
| `pnpm run build`            | Compile the app for production (standalone)                     |
| `pnpm run start`            | Run the compiled production build                               |
| `pnpm run check`            | Run **format:check**, **lint**, **typecheck**, and **test:run** |
| `pnpm run lint`             | Run ESLint analysis                                             |
| `pnpm run lint:fix`         | Auto‑fix linting issues                                         |
| `pnpm run format`           | Run Prettier formatter                                          |
| `pnpm run format:check`     | Verify code follows Prettier rules                              |
| `pnpm run typecheck`        | TypeScript type‑checking only                                   |
| `pnpm run test`             | Run Vitest in watch mode                                        |
| `pnpm run test:run`         | Run the full test suite (CI‑friendly)                           |
| `docker compose up --build` | Build and run the Docker image with health checks               |

---

## Project Structure

```text
master/
├── .github/
│   └── workflows/ci.yml          # GitHub Actions CI workflow
├── .husky/                        # Git hooks (pre‑commit, pre‑push, commit‑msg)
├── public/                        # Static assets & favicons
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx        # Localized root layout (HTML lang, metadata)
│   │   │   ├── not-found.tsx     # Localized 404 page
│   │   │   └── page.tsx          # Main RSC page
│   │   ├── api/health/route.ts   # Healthcheck endpoint for Docker
│   │   ├── globals.css           # Tailwind & design‑token imports
│   │   ├── manifest.ts           # PWA manifest handler
│   │   ├── robots.ts             # Dynamic robots.txt generator
│   │   └── sitemap.ts            # Multilingual sitemap generator
│   ├── components/
│   │   ├── layout/               # Navbar, Footer, ModeToggle, etc.
│   │   └── ui/                   # Shadcn UI primitives
│   ├── i18n/                     # next‑intl routing & middleware
│   ├── lib/
│   │   ├── __tests__/            # Vitest unit tests
│   │   ├── env.ts                # Typed env‑variable handling (Zod + t3‑env)
│   │   ├── site-config.ts        # Central site configuration
│   │   └── utils.ts              # `cn` utility (clsx + tailwind‑merge)
│   ├── messages/                 # Translation catalogs (en.json, es.json)
│   └── proxy.ts                  # i18n routing middleware
├── commitlint.config.cjs          # Conventional commit rules
├── compose.yml                    # Docker Compose specification
├── Dockerfile                     # Multi‑stage, immutable Docker image
├── eslint.config.mjs              # Flat ESLint config (v9+)
├── next.config.ts                 # Next.js config with CSP headers
├── package.json                   # Scripts, dependencies, and PNPM config
├── vitest.config.mts              # Vitest test environment config
└── tsconfig.json                 # Strict TypeScript configuration
```

---

## Contributing & Issue Reporting

We welcome community contributions! To keep the template up‑to‑date with the latest best practices:

1. **Report an issue** – Open a [GitHub Issue](https://github.com/) describing the bug or improvement.
2. **Submit a pull request** – Fork the repo, create a branch (`feat/your-feature` or `fix/bug-fix`), and open a PR.

Every contribution, no matter how small, helps the community.

---

## 📄 License

This project is licensed under the **MIT License** – feel free to use, modify, and distribute it for personal or commercial projects.
