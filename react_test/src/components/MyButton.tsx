
// 定义并导入了一个 React 组件，名字为 MyButton
// React 组件是返回标签的 JavaScript 函数。这个函数的名字必须以大写字母开头
export default function MyButton() {

  function handleClick() {
    alert('按钮被点击了');
    console.log('用户点击了按钮');
  }

  return <button onClick={handleClick}>我是一个按钮</button>;
}
