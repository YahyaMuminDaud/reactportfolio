import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/reactportfolio/",  // Update the base path if needed for GitHub Pages or other environments
  build: {
    // Removed 'external' for 'react-router-dom' because it should be bundled with the app
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      // other aliases you may need
    }
  }
});

