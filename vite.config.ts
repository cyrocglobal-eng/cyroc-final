import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Set base to the repository name so built assets load correctly on GitHub Pages
  base: '/cyroc-final/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
