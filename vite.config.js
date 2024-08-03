import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "node_modules/@fortawesome/fontawesome-svg-core/scss/fontawesome.scss";
          @import "node_modules/@fortawesome/free-solid-svg-icons/scss/solid.scss";
        `,
      },
    },
  },
});