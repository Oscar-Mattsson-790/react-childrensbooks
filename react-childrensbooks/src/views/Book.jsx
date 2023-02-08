import React from "react";
import "./Book.css";

export default function Book() {
  return (
    <div className="book-container">
      <div className="container-header">
        <button className="arrow-btn">A</button>
      </div>
      <div className="container-book">
        <h2 id="bookh2">A Wrinkle in Time</h2>
        <h3 id="bookh3">Madeleine L'Engle</h3>
      </div>
      <div className="container-book-info">
        <h2>A Wrinkle in Time</h2>
        <h3 id="bookh3second">By Madeleine L'Engle</h3>
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
