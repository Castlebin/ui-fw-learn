import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],  // 插件

  server: {  // 服务器配置
    port: 5000,
  },
});
