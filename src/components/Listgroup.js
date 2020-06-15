import React from "react";

const ListGroup = ({ types, typeSelect, selectType }) => {
  return (
    <ul className="list-group  " style={{ textTransform: "capitalize" }}>
      {types.map((type) => (
        <li
          key={type}
          onClick={() => typeSelect(type)}
          className={
            type === selectType ? "list-group-item active" : "list-group-item"
          }
          style={{ cursor: "pointer" }}
        >
          {type}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
