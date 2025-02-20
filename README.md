# ui-fw-learn

前端知识了解一下


## 使用 vite 搭建 React 项目

### 1. 新建项目
```shell
npm create vite@latest react_vite_test_1 --template react
cd react_vite_test_1
npm install
```
这个命令会创建一个名为 `react_vite_test_1` 的 React 项目，并且安装所有依赖。默认使用的是 Vite 作为构建工具，React 和 React-DOM 作为基础库。

### 2. 运行项目
```shell
npm run dev
```
这个命令会启动一个开发服务器，监听文件变化并实时更新页面。  

这时候可以打开浏览器访问 http://localhost:5173，你应该能看到 Vite 提供的默认欢迎页面。

### 3. Vite 配置
Vite 的配置文件是 `vite.config.js`，这里可以配置一些构建选项。比如，可以配置 `server` 选项来修改开发服务器的端口：
```js
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],   // 插件配置，Vite 支持很多插件，比如 React 插件、TypeScript 插件等。
  server: {
    port: 5173,   // 端口号
  },
});
```
