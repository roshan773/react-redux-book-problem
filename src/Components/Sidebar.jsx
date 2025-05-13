import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Sidebar = () => {
  const [books, setBooks] = useState([]);
  const [order, setOrder] = useState("asc"); 

  const fetchBooks = async (order = "asc") => {
    try {
      const res = await axios.get(
        `http://localhost:8080/books?_sort=releaseYear&_order=${order}`
      );
      setBooks(res.data);
    } catch (err) {
      console.error("Failed to fetch books:", err);
    }
  };

  useEffect(() => {
    fetchBooks(order); 
  }, [order]);

  const handleSort = (e) => {
    const selectedOrder = e.target.value;
    setOrder(selectedOrder); 
  };

  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input data-testid="novel-filter" type="checkbox" value="Novel" />
        <label>Novel</label>
        <br />
        <input data-testid="science-fiction-filter" type="checkbox" value="Science_Fiction" />
        <label>Science Fiction</label>
        <br />
        <input data-testid="thriller-filter" type="checkbox" value="Thriller" />
        <label>Thriller</label>
        <br />
        <input data-testid="motivational-filter" type="checkbox" value="Motivational" />
        <label>Motivational</label>
      </div>

      <br />
      <h3>Sort By Release Year</h3>
      <div>
        <input
          data-testid="sort-asc"
          type="radio"
          name="sort"
          value="asc"
          onChange={handleSort}
          checked={order === "asc"}
        />
        <label>Ascending</label>
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value="desc"
          onChange={handleSort}
          checked={order === "desc"}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
