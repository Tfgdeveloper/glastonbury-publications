import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  build: {
    // This tells Vite to minify the code for production
    minify: 'esbuild', // Default minification using esbuild (fast and efficient)
    sourcemap: false, // Optional: Disable source maps for production (you can enable this if you need it for debugging)
  },
})
