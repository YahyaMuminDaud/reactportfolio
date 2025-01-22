import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/reactportfolio/",
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  }
  , resolve: {
    alias: {
      '@components': '/src/components',
      // other aliases
    }
  }

})


