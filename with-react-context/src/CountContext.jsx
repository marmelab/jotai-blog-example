import { createContext, useState } from "react";

export const CountContext = createContext({
  countA: 0,
  countB: 0,
  incrementA: () => {},
  incrementB: () => {},
});

export const CountContextProvider = ({ children }) => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const incrementA = () => setCountA(countA + 1);
  const incrementB = () => setCountB(countB + 1);
  return (
    <CountContext.Provider value={{ countA, countB, incrementA, incrementB }}>
      {children}
    </CountContext.Provider>
  );
};
