import React from "react";

export const BookCard = ({image, title, category, author, year, chapter}) => {
  return (
    <div className="book-card">
      {/* ``` - Show Image in image tag with class `book-image` - Show Book name
      with class `book-name` - Show Author with class `book-author` - Show
      Category with class `book-category` - Show Release year with class
      `book-year` - Show Number of chapters with class `book-chapter` * Do not
      add any extra text, See the Image provided to know what needs to be
      displayed * ``` */}

      <div>
        <img src={image} alt={title} height={300} width={300} />
        <h1>{title}</h1>
        <h2>{author}</h2>
        <h4>{category}</h4>
        <h4>{year}</h4>
        <h4>Chapters: {chapter}</h4>
        <button>Edit</button>
      </div>
      
    </div>
  );
};
