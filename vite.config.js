import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/arithmetic-series/',
  plugins: [react()],
  base: '/vite-deploy-demo/',
})
