import { useContext } from "react";
import { CountContext } from "./CountContext";
import { AnimateRender } from "./tools/AnimateRender";

export const ComponentB = () => {
  const { countB, incrementA, incrementB } = useContext(CountContext);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <AnimateRender>
        <div>Count B : {countB}</div>
      </AnimateRender>
      <AnimateRender>
        <button onClick={incrementA}>Increment A</button>
      </AnimateRender>
      <AnimateRender>
        <button onClick={incrementB}>Increment B</button>
      </AnimateRender>
    </div>
  );
};
