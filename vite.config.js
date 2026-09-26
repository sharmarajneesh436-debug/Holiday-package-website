import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    cssMinify: 'esbuild',
  },
  preview: {
    allowedHosts: ['holiday-package-website.onrender.com'],
  },
})