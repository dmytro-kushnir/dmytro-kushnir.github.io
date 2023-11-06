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
        inbox: path.resolve(__dirname, 'src/inbox/index.html'),
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  plugins: [
    react(), eslint(),
  ],
});
