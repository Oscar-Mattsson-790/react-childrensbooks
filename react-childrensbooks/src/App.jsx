import { useState } from "react";
import Allbooks from "./components/AllBooks/Allbooks";
import "./App.css";
import books from "./assets/childrensbooks.json";

function App() {
  const [count, setCount] = useState(0);

  console.log("va e detta", books);

  return (
    <div className="App">
      {books.map((book, key) => (
        <Allbooks key={key} title={book.title} author={book.author} />
      ))}
    </div>
  );
}

export default App;
