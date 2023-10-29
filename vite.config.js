import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        file1:'./main.js',
        file2:'./assets/aos-master/aos.js',
      },// Replace with the entry point of your JavaScript code
    },
  },
});