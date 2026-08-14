import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: false,
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        nana_banana: resolve(__dirname, 'nana_banana.html')
      }
    }
  }
});
