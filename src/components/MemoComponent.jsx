import { useState } from "react";
import ChildComponent from "./ChildComp";

const MemoComponent = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);
  console.log("Memo comp is rendered");
  return (
    <div>
      <h3>Memo component</h3>
      <span>{counter}</span>
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
      <ChildComponent number={number} />
      <span>{number}</span>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
    </div>
  );
};

export default MemoComponent;
