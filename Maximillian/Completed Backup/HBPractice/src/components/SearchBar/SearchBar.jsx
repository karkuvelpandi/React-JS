import React, { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <input type="button" value="Search" onClick={onSearch(keyword)} />
    </div>
  );
};
