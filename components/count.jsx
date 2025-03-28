import React, { useState } from "react"

const count = () => {
  const [add, setAdd] = useState(0);
  const countHandler = () => {
    setAdd(add + 1);
  };
  return (
    <>
      <h1>{{ add }}</h1>
      <button onClick={countHandler}>Count</button>
    </>
  );
};

export default count