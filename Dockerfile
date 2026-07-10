ARG NODE_VERSION=24.18-alpine
FROM node:${NODE_VERSION} AS dependencies
WORKDIR /app

# Copy lockfiles only for better layer caching
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* .npmrc* ./

# Install dependencies with package manager detection
RUN --mount=type=cache,target=/root/.npm \
    --mount=type=cache,target=/usr/local/share/.cache/yarn \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
  if [ -f package-lock.json ]; then \
    npm ci --no-audit --no-fund; \
  elif [ -f yarn.lock ]; then \
    corepack enable yarn && yarn install --frozen-lockfile --production=false; \
  elif [ -f pnpm-lock.yaml ]; then \
    corepack enable pnpm && pnpm install --no-frozen-lockfile || true; \
  else \
    echo "No lockfile found." && exit 1; \
  fi

FROM node:${NODE_VERSION} AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production

# Build application with mount cache for faster rebuilds
RUN --mount=type=cache,target=/root/.npm \
    --mount=type=cache,target=/usr/local/share/.cache/yarn \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    --mount=type=cache,target=/app/.next/cache \
  if [ -f package-lock.json ]; then \
    npm run build; \
  elif [ -f yarn.lock ]; then \
    corepack enable yarn && yarn build; \
  elif [ -f pnpm-lock.yaml ]; then \
    corepack enable pnpm && pnpm build; \
  else \
    echo "No lockfile found." && exit 1; \
  fi

FROM node:${NODE_VERSION} AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copy production dependencies and built app
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# Create .next directory with proper permissions for Next.js runtime cache
RUN mkdir -p .next && chown -R node:node .next

# Switch to non-root user for security
USER node
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:' + (process.env.PORT || 3000) + '/', (r) => { if (r.statusCode !== 200) throw new Error(r.statusCode); });"

CMD ["node", "server.js"]
