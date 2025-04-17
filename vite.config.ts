import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'CNAME', // the file we just created
          dest: '.'     // root of the dist/ folder
        }
      ]
    })
  ]
});
