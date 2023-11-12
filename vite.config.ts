import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // Build two separate bundles, one for each app.
      input: {
        home: path.resolve(__dirname, 'index.html'),
        webProgramming: path.resolve(__dirname, 'src/apps/web-programming/index.html'),
      },
    },
  },
  plugins: [react(), eslint()],
});
