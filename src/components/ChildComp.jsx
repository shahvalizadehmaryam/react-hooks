import { memo } from "react";

const ChildComponent = ({ number }) => {
  console.log("Child comp is rendered.");
  return <h3>childComponent:{number}</h3>;
};

export default memo(ChildComponent);
