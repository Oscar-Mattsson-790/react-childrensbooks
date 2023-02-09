import React from "react";
import "./BookCard.css";

export default function BookCard({ book }) {
  const { title, author, color } = book;

  return (
    <div className="bookCard-container" style={{ backgroundColor: `${color}` }}>
      <article className="book">
        <div className="book-line"></div>
        <h2>{title}</h2>
        <h3>{author}</h3>
      </article>
    </div>
  );
}
