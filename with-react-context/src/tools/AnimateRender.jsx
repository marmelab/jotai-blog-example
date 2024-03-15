import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
export const AnimateRender = ({ children }) => {
  const ref = useRef();
  useEffect(() => {
    const current = ref.current;
    current.style.transition = "";
    current.style.border = "solid 1px red";
    setTimeout(() => {
      current.style.transition = "border-color 500ms";
      current.style.border = "solid 1px transparent";
    }, 500);
  });
  return <div ref={ref}>{children}</div>;
};
