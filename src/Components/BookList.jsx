import Book from "./Book";
import { Books } from "../utils/mockData";
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";


function BookList() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);
  function handleSearch() {
    const filterBooks = Books.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filterBooks);
  }
  return (
    <>
      <div className="search">
        <h2>Search Books</h2>
        <div>
          <input
            className="search-input"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="bookList">
        {filteredBooks.map((data) => {
          return <Link to={`/book/${data.id}`}> <Book key={data.id} bookDeatails={data}/> </Link>;
        })}
      </div>
    </>
  );
}
export default BookList;
