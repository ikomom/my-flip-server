import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['esm'],
  entry: ['src/main.ts'],
  dts: true,
  clean: true,
})