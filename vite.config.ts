import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      include: ['tailwind-config.cjs', 'node_modules/**'],
    },
  },
  optimizeDeps: {
    include: ['tailwind-config'],
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@context': path.resolve(__dirname, './src/context'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@services': path.resolve(__dirname, './src/services'),
      '@types': path.resolve(__dirname, './src/types'),
      'tailwind-config': path.resolve(__dirname, './tailwind.config.cjs'),
    },
  },
});
