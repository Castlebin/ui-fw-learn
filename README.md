# ui-fw-learn

前端知识了解一下


## 使用 vite 搭建 React 项目

### 1. 新建项目
```
npm create vite@latest
```
按照提示输入 项目名称，然后选择 `react` 模板，再选择 `TypeScript`。等待项目创建完成后，根据提示进入项目目录、安装依赖：
```
cd <project-name>      # 你新建的项目名称
npm install
```

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

### 4. Reactor 组件开发
1. 创建 React 组件

Vite 配合 React 的开发方式和普通的 React 项目一样。你可以在 `src` 文件夹下创建 React 组件。

> 注意：请都使用 `.tsx` 文件来创建 React 组件，使用 TypeScript 来编写组件。不要使用 `.jsx` 文件，打包可能会出现问题！

```tsx
// src/components/Greeting.tsx
const Greeting = () => {
  return <h1>Hello, Vite and React!</h1>;
};

export default Greeting;
```
2. 使用组件
在 `src/App.tsx` 中引入创建的组件并使用：
```jsx
// src/App.tsx
import Greeting from './components/Greeting';

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
```

### 5. React 热更新与开发体验
Vite 提供了非常优秀的热模块替换（HMR）功能，这意味着当你修改组件时，页面会立即更新，无需刷新浏览器。

例如，你在 `Greeting.tsx` 文件中做了修改，Vite 会自动更新到浏览器中，而不需要手动刷新。

### 6. 处理静态资源
Vite 会自动处理静态资源的导入，图片、CSS 文件等可以直接导入到 JavaScript 中：
```jsx
// 导入图片
import logo from './assets/logo.png';

function App() {
  return (
    <div>
        {/* 使用图片 */}
      <img src={logo} alt="logo" />
    </div>
  );
}
```

### 7. 常用插件和功能
1. 使用 TypeScript
Vite 默认支持 TypeScript，你可以直接在项目中使用 TypeScript。
在项目中创建 `.ts` 或 `.tsx` 文件，Vite 会自动编译 TypeScript。

2. 环境变量
Vite 支持环境变量，你可以在项目中创建 `.env` 文件来配置环境变量：
```shell
# .env
VITE_APP_NAME=React Vite App
```
然后，你可以在项目中使用 `import.meta.env` 来访问环境变量：
```jsx
function App() {
  return (
    <div>
      <h1>{import.meta.env.VITE_APP_NAME}</h1>
    </div>
  );
}
```

### 8. 打包和发布
1. 打包应用
```shell
npm run build
```
这个命令会将项目打包到 `dist` 文件夹中，你可以将 `dist` 文件夹中的文件部署到服务器上。

2. 预览打包后的应用
```shell
npm run preview
```
这个命令会启动一个本地服务器，预览打包后的应用。
