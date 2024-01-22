// function Button() {
//   return <button>click me！</button>;

import { useState } from "react";

// }
const Button = () => {
  return <button>click me！</button>;
};

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Button />
      <Button></Button>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default App;
