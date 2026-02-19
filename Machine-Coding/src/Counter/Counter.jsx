import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }

  function decrease(){
    if(count===0) return
    setCount(count-1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
