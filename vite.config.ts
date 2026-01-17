import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows the Vite server to listen on all network interfaces
    hmr: {
      protocol: 'wss', // Use secure WebSocket protocol
      clientPort: 443 // The port exposed by the proxy to your browser for HMR
    },
    port: 5173 // The internal port for Vite, which is then mapped by the proxy to an external port
  }
})
