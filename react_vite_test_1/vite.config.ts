import { defineConfig } from 'vite'

import path from 'path'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],  // 插件

  server: {  // 服务器配置
    port: 5000,
  },

  resolve: {
    alias: {  // 别名
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },

});
