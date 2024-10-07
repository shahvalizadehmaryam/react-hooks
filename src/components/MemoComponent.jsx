import { useCallback, useMemo, useState } from "react";
import ChildComponent from "./ChildComp";

const MemoComponent = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);
  console.log("Memo comp is rendered");
  const slow = useMemo(() => {
    for (let index = 0; index < 50000000; index++) {}
    return counter;
  }, [counter]);
  const clickHandler = useCallback(() => {
    setNumber((number) => number + 1);
  }, [number]);
  return (
    <div>
      <h3>Memo component</h3>
      <span>{slow}</span>
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
      <ChildComponent number={number} clickHandler={clickHandler} />
      {/* <span>{number}</span>
      <button onClick={() => setNumber((number) => number + 1)}>+</button> */}
    </div>
  );
};

export default MemoComponent;
