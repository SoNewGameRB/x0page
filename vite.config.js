import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/x0page/' // 這裡替換為你的儲存庫名稱
})
