import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://ai-arena-4i2t.onrender.com',
        changeOrigin: true,
      },
      '/invoke': {
        target: 'https://ai-arena-4i2t.onrender.com',
        changeOrigin: true,
      },
    },
  },
})
