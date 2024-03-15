import { atom, useAtom } from "jotai";

import { incrementAAtom } from "./ComponentA";
import { AnimateRender } from "./tools/AnimateRender";

const countBAtom = atom(0, (get, set) => {
  set(countBAtom, get(countBAtom) + 1);
});

export const ComponentB = () => {
  const [countB, incrementB] = useAtom(countBAtom);
  const [, incrementA] = useAtom(incrementAAtom);
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
