import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 导入自定义的组件 Greeting
import Greeting from './components/Greeting';

import Hello from './components/Hello';

// 导入图片资源 （ 上面的 reactLogo 和 ViteLogo 也是这么导入的 ）
import logo from './assets/logo.png'

function handleClick() {
  alert('你点击了!')
}

function App() {
  const [count, setCount] = useState(0)

  // 使用环境变
  const name = import.meta.env.VITE_APP_NAME;
  console.log('name:', name);

  return (
    <>
    <div onClick={handleClick}>
      {/* 使用环境变量 */}
      <h1>配置项：{import.meta.env.VITE_APP_NAME}</h1>
    </div>
      {/* 也可以这样写 */}
      <h2>配置项：{name}</h2>

      <Hello />

      // 使用自定义的组件 Greeting  （可以看到这行不是注释）是 HTML 

      /* 这行也不是注释  */
      {/* 使用图片。    这样才是注释 */}
      <img src={logo} alt="logo" className='myPic' />
      
      <Greeting />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
