import { atom, useAtom } from "jotai";
import { AnimateRender } from "./tools/AnimateRender";

export const countAAtom = atom(0, (get, set) => {
  set(countAAtom, get(countAAtom) + 1);
});
export const ComponentA = () => {
  const [countA, incrementA] = useAtom(countAAtom);
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
