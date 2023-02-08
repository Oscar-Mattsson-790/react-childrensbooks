import { useState } from "react";
import Allbooks from "./components/AllBooks/Allbooks";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Allbooks />
    </div>
  );
}

export default App;
