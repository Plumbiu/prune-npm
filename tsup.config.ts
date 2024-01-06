import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  format: 'esm',
  clean: true,
  bundle: true,
  minify: true,
  platform: 'node',
  noExternal: [/([^@swc/core]]*)/],
  banner: {
    js: `#! /usr/bin/env node
    const require = (await import("node:module")).createRequire(import.meta.url);
const __filename = (await import("node:url")).fileURLToPath(import.meta.url);
const __dirname = (await import("node:path")).dirname(__filename);
    `,
  },
})
