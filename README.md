# Master Template Profesional para Next.js

## 1. Propósito del Proyecto

Este master template es una base sólida y profesional para el desarrollo de proyectos Next.js de alta calidad. Incluye una configuración optimizada para UI-ready con Shadcn/UI, seguridad robusta con CSP, SEO avanzado, Dockerización eficiente y un pipeline de calidad integral con testing unitario, de integración y E2E, asegurando un inicio rápido y un mantenimiento escalable.

## 2. Librerías y Tecnologías Implementadas

Este template viene pre-configurado con las siguientes tecnologías y herramientas clave:

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/docs)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/docs)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/docs/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/docs)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcn-ui&logoColor=white)](https://ui.shadcn.com/docs)
[![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/docs)
[![Class Variance Authority](https://img.shields.io/badge/CVA-FF4785?style=for-the-badge&logo=cva&logoColor=white)](https://cva.dev/docs)
[![Remixicon](https://img.shields.io/badge/Remixicon-3399FF?style=for-the-badge&logo=remixicon&logoColor=white)](https://remixicon.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/docs/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/docs/en/)
[![Vitest](https://img.shields.io/badge/Vitest-6E93ED?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/guide/)
[![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/docs/)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/docs/intro)
[![Husky](https://img.shields.io/badge/Husky-000000?style=for-the-badge&logo=husky&logoColor=white)](https://typicode.github.io/husky/#/)
[![lint-staged](https://img.shields.io/badge/lint--staged-67B2E8?style=for-the-badge&logo=lint-staged&logoColor=white)](https://github.com/okonet/lint-staged)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/)
[![Docker Compose](https://img.shields.io/badge/Docker_Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/compose/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://docs.github.com/en/actions)

## 3. Pasos para Empezar a Usar este Template

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1.  **Clonar el Repositorio:**

    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd master-template
    ```

2.  **Instalar Dependencias:**
    Asegúrate de tener `pnpm` instalado. Si no, puedes instalarlo con `npm install -g pnpm`.

    ```bash
    pnpm install
    ```

3.  **Instalar Navegadores de Playwright (para E2E):**

    ```bash
    pnpm e2e:install
    ```

4.  **Configurar Variables de Entorno:**
    Copia el archivo de ejemplo y edita tus variables de entorno.

    ```bash
    cp .env.example .env.local
    # Abre .env.local y configura tus valores
    ```

5.  **Archivos Importantes a Modificar:**
    Antes de empezar a añadir tu propio código, considera modificar los siguientes archivos para adaptar el proyecto a tus necesidades:
    - `next.config.js`: Configuración principal de Next.js (imágenes, redirecciones, etc.).
    - `tailwind.config.js`: Personalización de tu tema de Tailwind CSS.
    - `package.json`: Actualiza el nombre, la descripción y la versión de tu proyecto.
    - `src/app/layout.tsx`: Define el layout global de tu aplicación, metadatos y estructura HTML raíz.
    - `src/app/page.tsx`: Modifica el contenido de la página de inicio.
    - `public/favicon.ico`: Reemplaza el ícono de la aplicación.
    - `public/robots.txt`: Configura las directivas para los rastreadores web.
    - `public/sitemap.xml`: Genera o actualiza el mapa del sitio para SEO.

6.  **Ejecutar el Servidor de Desarrollo:**

    ```bash
    pnpm run dev
    ```

7.  **Abrir la Aplicación en el Navegador:**

    ```
    http://localhost:3000
    ```

8.  **¡Empieza a Construir!**
    Comienza a desarrollar tu aplicación editando `src/app/page.tsx` o creando nuevas rutas y componentes.

## 4. Comandos Disponibles en el Proyecto

Aquí tienes una tabla con los scripts que puedes ejecutar en este proyecto, organizados por categoría:

| Comando                  | Descripción                                                                              |
| :----------------------- | :--------------------------------------------------------------------------------------- |
| **Desarrollo**           |                                                                                          |
| `pnpm run dev`           | Inicia el servidor de desarrollo de Next.js.                                             |
| `pnpm run test:watch`    | Ejecuta Vitest en modo de observación para desarrollo.                                   |
| **Build y Producción**   |                                                                                          |
| `pnpm run build`         | Compila la aplicación para producción.                                                   |
| `pnpm run start`         | Inicia la aplicación compilada en modo producción.                                       |
| **Calidad de Código**    |                                                                                          |
| `pnpm run typecheck`     | Ejecuta la verificación de tipos con TypeScript.                                         |
| `pnpm run lint`          | Ejecuta ESLint para analizar el código en busca de problemas.                            |
| `pnpm run lint:fix`      | Ejecuta ESLint y corrige automáticamente los problemas que pueda.                        |
| `pnpm run format`        | Formatea todos los archivos del proyecto con Prettier.                                   |
| `pnpm run format:check`  | Verifica si los archivos están formateados correctamente con Prettier.                   |
| `pnpm run check-quality` | Ejecuta `lint`, `typecheck` y `test` en secuencia.                                       |
| **Testing**              |                                                                                          |
| `pnpm run test`          | Ejecuta todas las pruebas unitarias y de integración con Vitest.                         |
| `pnpm e2e`               | Ejecuta las pruebas End-to-End con Playwright.                                           |
| `pnpm e2e:headed`        | Ejecuta las pruebas E2E con Playwright mostrando el navegador.                           |
| `pnpm e2e:install`       | Instala los navegadores necesarios para Playwright.                                      |
| **Utilidades**           |                                                                                          |
| `pnpm prepare`           | Configura los Git hooks de Husky (se ejecuta automáticamente después de `pnpm install`). |

## 5. Guía de Despliegue (Ejemplo con Vercel)

Esta guía te ayudará a desplegar tu proyecto Next.js en Vercel, una plataforma popular para aplicaciones Next.js.

### 5.1. Preparación del Repositorio

1.  **Crea un Nuevo Repositorio en GitHub/GitLab/Bitbucket:**
    Si aún no lo has hecho, crea un nuevo repositorio vacío en tu proveedor de Git preferido y sube tu código.
    ```bash
    git remote set-url origin https://github.com/tu-usuario/tu-proyecto.git # Cambia la URL
    git push -u origin main
    ```

### 5.2. Despliegue en Vercel

1.  **Crea una Cuenta en Vercel:**
    Si no tienes una, regístrate en vercel.com. Puedes usar tu cuenta de GitHub/GitLab/Bitbucket para un registro rápido.

2.  **Importa tu Proyecto:**
    - Desde el dashboard de Vercel, haz clic en "Add New..." y luego en "Project".
    - Selecciona tu proveedor de Git (GitHub, GitLab, Bitbucket) y busca el repositorio de tu proyecto.
    - Haz clic en "Import".

3.  **Configura el Proyecto (Configuración por Defecto):**
    - Vercel detectará automáticamente que es un proyecto Next.js.
    - La mayoría de las configuraciones por defecto serán correctas. Asegúrate de que el "Framework Preset" sea "Next.js".
    - **Root Directory:** Si tu código Next.js está en la raíz del repositorio, déjalo en blanco. Si está en un subdirectorio (ej. `frontend/`), especifica esa ruta.

4.  **Configura las Variables de Entorno:**
    - En la sección "Environment Variables" de la configuración del proyecto en Vercel, añade todas las variables que tengas en tu `.env.local` (excepto las que sean solo para desarrollo local).
    - Asegúrate de añadir `NEXT_PUBLIC_SITE_URL` con la URL de producción de tu sitio (ej. `https://tu-dominio.com`).

5.  **Desplegar:**
    - Haz clic en "Deploy". Vercel construirá y desplegará tu aplicación.
    - Una vez que el despliegue sea exitoso, Vercel te proporcionará una URL de producción.

### 5.3. Despliegues Continuos

- Vercel configurará automáticamente el despliegue continuo. Cada vez que hagas un `git push` a la rama `main` (o la rama que hayas configurado como producción), Vercel construirá y desplegará automáticamente la nueva versión de tu aplicación.
- Para las Pull Requests, Vercel creará automáticamente un "Preview Deployment" para que puedas revisar los cambios antes de fusionarlos.

---
