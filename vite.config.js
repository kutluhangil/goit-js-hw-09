import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    global: 'window'
  },
  base: '/goit-js-hw-09/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        gallery: 'src/pages/gallery/gallery.html',
        form: 'src/pages/form/form.html'
      }
    }
  }
});
