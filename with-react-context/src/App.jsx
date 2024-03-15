import "./App.css";
import { ComponentA } from "./ComponentA";
import { ComponentB } from "./ComponentB";
import { CountContextProvider } from "./CountContext";

function App() {
  return (
    <CountContextProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "30px",
          marginBottom: "30px",
          paddingTop: "20px",
          paddingBottom: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px black",
        }}
      >
        <ComponentA />
        <ComponentB />
      </div>
    </CountContextProvider>
  );
}

export default App;
