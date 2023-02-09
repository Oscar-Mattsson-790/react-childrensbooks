import React, { useState } from "react";
import "./Library.css";
import books from "../../assets/childrensbooks.json";
import BookCard from "../BookCard/BookCard";
import Book from "../../views/Book";
import { Link } from "react-router-dom";

export default function Library() {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <div className="library-container">
      <h1>8 Classic childrens books</h1>
      {books.map((book, key) => (
        <Link to={"./book"} key={key}>
          <BookCard key={book.id} book={book} />
        </Link>
      ))}
    </div>
  );
}
