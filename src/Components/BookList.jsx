import React, { useEffect, useState } from "react";
import { BookCard } from "./BookCard";
import axios from "axios";

export const BookList = () => {

  const [data, setdata] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(null)


  const fetchdata = async () => {
    setloading(true)
    try {
      const res = await axios.get("http://localhost:8080/books")
      setloading(false)
      seterror(false)
      setdata(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
      setloading(true)
      seterror(true)
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <div data-testid="book-list">
      {/* Map through books using BookCard component */}
      {/* <BookCard /> */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr", gap: "10px" }}>
        {data.map((el) => (
          <div style={{border: "1px solid #000000", padding: "10px"}}>
            <BookCard image={el.cover_photo} title={el.book_name} author={el.author} category={el.category} year={el.release_year} chapter={el.no_of_chapters} />
          </div>
        ))}
      </div>
    </div>
  );
};
