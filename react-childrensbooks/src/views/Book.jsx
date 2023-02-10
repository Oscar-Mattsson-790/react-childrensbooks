import React from "react";
import "./Book.css";
import books from "../assets/childrensbooks.json";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Book(id) {
  const [bookData, setBookData] = useState(true);
  const params = useParams();

  const selectedBook = books.filter((book) => book.id === Number(params.id));

  console.log("bokens id= ", selectedBook);

  return (
    <div className="book-container">
      <button className="return-btn">
        <span>&#8592;</span>
      </button>
      <div className="container-book">
        <div className="book-line-second"></div>
        <h1 className="book-title-first">A Wrinkle in Time</h1>
        <h5 className="book-author-first">Madeleine L'Engle</h5>
      </div>
      <div className="container-book-info">
        <h4 className="book-title-second">A Wrinkle in Time</h4>
        <h5 className="book-author-second">By Madeleine L'Engle</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit dolorum nisi dicta mollitia adipisci. Dolor pariatur
          officiis est ipsa magni, ullam libero quia nam repellendus. Eaque
          quisquam tempora ea eligendi?Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Fugiat asperiores nam excepturi ea, consectetur
          voluptate obcaecati, aliquid minus saepe sunt reprehenderit culpa unde
          iste eveniet nulla. Harum dignissimos velit repellat.
        </p>
        <div className="container-book-info-box">
          <div className="box1">
            <p>Audience: 8-12 years</p>
            <p>Pages: 256</p>
          </div>
          <div className="box2">
            <p>First published: 1952</p>
            <p>Publisher: Square Fish</p>
          </div>
        </div>
        <button className="book-btn">Oh, I want to read it!</button>
      </div>
    </div>
  );
}
