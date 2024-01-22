// function Button() {
//   return <button>click me！</button>;

import { useState } from "react";
import  './index.css'
// }
const Button = () => {
  return <button>click me！</button>;
};
const style = {
    color: 'red',
    fontSize: '50px'
}
function App() {
  let [count, setCount] = useState(0);
  const handleClick = () => {
      //直接修改，无法引发视图更新
      count++
    setCount(count + 1);
  };
  const [form,setForm]=useState({name:'jack'})
    const  changeForm = ()=>{
      //错误写法
      //   form.name='john'
        setForm({
            ...form,
                name:'joe'
        })
    }
  return (
    <div className="App">
      <Button />
      <Button></Button>
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>修改form：{form.name}</button>
        {/*<span style={{color:'red',fontSize:'50px'}}>this is span</span>*/}
        {/*<span style={style}>this is span</span>*/}
        <span className="foo">this is class foo</span>
    </div>
  );
}

export default App;
