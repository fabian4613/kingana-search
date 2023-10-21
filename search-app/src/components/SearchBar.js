import React from "react";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar películas y series..." />
      <button>Buscar</button>
    </div>
  );
}

export default SearchBar;
