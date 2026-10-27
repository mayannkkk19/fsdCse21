import { Comp1 } from "./components/Comp1";
import { useContext, createContext } from "react";


const App = () => {
  const myname = createContext("Mayank");
  const value = useContext(myname);

  return (
    <div>
      <h1>Value from context is: {value}</h1>
      <Comp1 value={value} />
    </div>
  );
};

export default App;
