import React from "react";
import "./Allbooks.css";

export default function Allbooks({ author, title }) {
  return (
    <div className="allbooks-container">
      <h1>8 Classic hildrens books</h1>
      <div className="book-wrapper1">
        <article className="book book1">
          <div className="book__line"></div>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </article>
        <article className="book book2">
          <div className="book__line"></div>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </article>
        <article className="book book3">
          <div className="book__line"></div>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </article>
        <article className="book book4">
          <div className="book__line"></div>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </article>
      </div>
      <div className="book-wrapper2">
        <article className="book book5">
          <div className="book__line"></div>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </article>
        <article className="book book6">
          <div className="book__line"></div>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </article>
        <article className="book book7">
          <div className="book__line"></div>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </article>
        <article className="book book8">
          <div className="book__line"></div>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </article>
      </div>
    </div>
  );
}
