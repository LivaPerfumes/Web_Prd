import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/", // Change this to match your GitHub repository name
  plugins: [react()],
});
