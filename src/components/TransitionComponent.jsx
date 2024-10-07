import { useState, useTransition } from "react";
function arrayCreator(number = 10) {
  const myArr = [];
  for (let index = number; index > 0; index--) {
    myArr.push(index);
  }
  return myArr;
}
const TransitionComponent = () => {
  console.log("Transition comp rendered");
  const [value, setValue] = useState("");
  const [counter, setCounter] = useState(arrayCreator());
  const [isPending , startTransition] = useTransition();
  const changeHandler = (event) => {
    setValue(event.target.value);
    
    startTransition(() => setCounter(arrayCreator(event.target.value)))
  };
  return (
    <div>
      <h3>Transition comp</h3>
      <input type="text" value={value} onChange={changeHandler} />
      {counter.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  );
};

export default TransitionComponent;
