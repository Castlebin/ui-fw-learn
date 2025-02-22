import { useState } from 'react'
import reactLogo from './assets/react.svg'
import anPic from './assets/an_pic.png'
import viteLogo from '/vite.svg'
import './App.css'
import MyApp from './components/MyApp'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'

function App() {
  // useState  hook
  const [count, setCount] = useState(0)

  // 通过条件渲染，决定渲染哪个组件
  let content;
  if (2 > 1) {
    content = <MyApp />;
  } else {
    content = <Profile />;
  }

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );

  return (
    <>
      <h1>Shopping List：</h1>
      <ShoppingList />

      <ul>{listItems}</ul>
      {content}  {/* 使用条件渲染 */}
      <img src={anPic} alt="an_pic" className='my-css' />
      <Profile />
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
