import React from "react";
import "./Book.css";
import books from "../assets/childrensbooks.json";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Book() {
  const params = useParams();

  const selectedBook = books.filter((book) => book.id === Number(params.id))[0];

  const { title, author, plot, audience, pages, year, publisher, color } =
    selectedBook;

  return (
    <div className="book-container">
      <Link to="/">
        <button className="return-btn">
          <span>&#8592;</span>
        </button>
      </Link>
      <div className="container-book" style={{ backgroundColor: `${color}` }}>
        <div className="book-line-second"></div>
        <h1 className="book-title-first">{title}</h1>
        <h5 className="book-author-first">{author}</h5>
      </div>
      <div className="container-book-info">
        <h4 className="book-title-second">{title}</h4>
        <h5 className="book-author-second">{author}</h5>
        <p>{plot}</p>
        <div className="container-book-info-box">
          <div className="box1">
            <p>Audience: {audience}</p>
            <p>Pages: {pages}</p>
          </div>
          <div className="box2">
            <p>First published: {year}</p>
            <p>Publisher: {publisher}</p>
          </div>
        </div>
        <button className="book-btn">Oh, I want to read it!</button>
      </div>
    </div>
  );
}
