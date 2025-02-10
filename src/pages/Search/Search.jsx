import React from "react";
import './search.css';
function Search() {
  return (
    <div className="search">
        <label htmlFor='search'>Search:</label> <input id='search' placeholder="pillow,blanket,bed linen"/>
    </div>
  );
}

export default Search;
