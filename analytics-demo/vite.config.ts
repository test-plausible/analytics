import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

const isProduction = process.env.NODE_ENV === "production";
//   base: isProduction ? "/analytics/" : "/",

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
