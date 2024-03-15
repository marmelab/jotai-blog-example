import { atom, useAtom } from "jotai";
import { AnimateRender } from "./tools/AnimateRender";

const countAAtom = atom(0);
export const incrementAAtom = atom(null, (get, set) => {
  set(countAAtom, get(countAAtom) + 1);
});

export const ComponentA = () => {
  const [countA] = useAtom(countAAtom);
  const [, incrementA] = useAtom(incrementAAtom);
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
