import "./Library.css";
import books from "../../assets/childrensbooks.json";
import BookCard from "../BookCard/BookCard";
import Book from "../../views/Book";
import { Link } from "react-router-dom";

export default function Library() {
  function handleClick(id) {
    Book(id);
  }

  return (
    <div className="library">
      <h1>8 Classic childrens books</h1>
      <div className="library-container">
        {books.map((book, key) => (
          <Link
            className="link"
            to={`/book/${book.id}`}
            key={key}
            onClick={() => handleClick(book.id)}
          >
            <BookCard key={book.id} book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
}
