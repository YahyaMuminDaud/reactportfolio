import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/reactportfolio/",
  server: {
    host: '0.0.0.0',  // Exposes the server to your network
    port: 5174,       // Use the same port as shown in your terminal
    strictPort: true  // Ensures Vite doesn't auto-change the port
  }
});
