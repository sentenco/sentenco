import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// `vite build --mode app` builds the phone app (Capacitor) from app.html and src/app.
// It only ships public-app/, and the page is renamed to index.html for the native shell.
// The website build is unchanged.
function appIndex() {
  let outDir = 'dist-app'
  return {
    name: 'sentenco-app-index',
    configResolved(config) { outDir = config.build.outDir },
    closeBundle() {
      const from = path.resolve(outDir, 'app.html')
      if (fs.existsSync(from)) fs.renameSync(from, path.resolve(outDir, 'index.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode !== 'app') return { plugins: [react()] }
  return {
    plugins: [react(), appIndex()],
    publicDir: 'public-app',
    build: { outDir: 'dist-app', emptyOutDir: true, rollupOptions: { input: 'app.html' } },
  }
})
