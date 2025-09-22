import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração básica para funcionar na Vercel
export default defineConfig({
  plugins: [react()],
  base: '/', // garante paths corretos
})
