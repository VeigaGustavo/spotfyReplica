// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/front-end/",
  plugins: [react()],
  server: {
    mimeTypes: {
      'application/javascript': ['jsx']
    }
  },
  base: process.env.VITE_BASE_PATH || “/spotfyReplica”,
});
