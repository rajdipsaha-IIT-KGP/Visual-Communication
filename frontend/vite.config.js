import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // keep this (Tailwind v4 plugin)
  ],
  css: {
    lightningcss: {
      browserslist: false,   // 🔥 Fix for Vercel LightningCSS error
    }
  }
})
