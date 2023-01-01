import React from "react";
import BackwardCounter from "./BackwardCounter";
import ForwardCounter from "./ForwardCounter";

function Counter() {
  return (
    <>
      <ForwardCounter />
      <BackwardCounter />
    </>
  );
}

export default Counter;
