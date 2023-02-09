import { useState } from "react";
import Library from "./components/Library/Library";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Library />
    </div>
  );
}

export default App;
