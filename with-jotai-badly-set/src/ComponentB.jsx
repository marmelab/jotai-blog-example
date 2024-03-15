import { atom, useAtom } from "jotai";
import { AnimateRender } from "./tools/AnimateRender";

// We import the countAAtom from ComponentA
import { countAAtom } from "./ComponentA";

const countBAtom = atom(0, (get, set) => {
  set(countBAtom, get(countBAtom) + 1);
});

export const ComponentB = () => {
  const [countB, incrementB] = useAtom(countBAtom);

  // We use the countAAtom from ComponentA
  const [, incrementA] = useAtom(countAAtom);
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
