import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  css: {
    transformer: "postcss",   // disable LightningCSS
    postcss: {}               // force Vite to use PostCSS
  },
  optimizeDeps: {
    exclude: ["lightningcss"] // hard-disable lightningcss
  },
  build: {
    cssMinify: "esbuild"      // also avoids lightningcss during minify
  }
})
