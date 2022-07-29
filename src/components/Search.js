import React from "react";

const Search = () => {
  return (
    <div className="px-5">
      <input
        className="px-3 py-1 outline-none border-b border-b-gray-300 focus:border-b focus:border-b-orange-500 transition-all mb-3 w-full"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
