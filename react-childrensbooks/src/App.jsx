import { useState } from "react";
import Allbooks from "./components/AllBooks/Allbooks";
import "./App.css";
import books from "./assets/childrensbooks.json";

function App() {
  const [count, setCount] = useState(0);

  console.log(books);

  return (
    <div className="App">
      <Allbooks />
    </div>
  );
}

export default App;
