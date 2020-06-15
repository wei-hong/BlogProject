import React from "react";

const Search = (props) => {
  return (
    <input
      style={{ width: "10vw", marginLeft: "15px" }}
      type="text"
      name="query"
      className=" form-control"
      placeholder="Search..."
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default Search;
