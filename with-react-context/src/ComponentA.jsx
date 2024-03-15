import { useContext } from "react";
import { CountContext } from "./CountContext";
import { AnimateRender } from "./tools/AnimateRender";

export const ComponentA = () => {
  const { countA, incrementA } = useContext(CountContext);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <AnimateRender>
        <div style={{}}>Count A: {countA}</div>
      </AnimateRender>
      <AnimateRender>
        <button onClick={incrementA}>Increment A</button>
      </AnimateRender>
    </div>
  );
};
