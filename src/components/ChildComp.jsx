import { memo } from "react";

const ChildComponent = ({ number, clickHandler }) => {
  console.log("Child comp is rendered.");
  return (
    <>
      <h3>childComponent:{number}</h3>
      <button onClick={clickHandler}>child +</button>
    </>
  );
};

export default memo(ChildComponent);
