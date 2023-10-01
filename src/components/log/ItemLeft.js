import React from "react";

function ItemLeft({title}) {
  return (
    <div className="Item-left">
      <div className="Item-left-title">
        <p className="left-title">{title}</p>
      </div>
      <div className="Item-left-image"></div>
    </div>
  );
}

export default ItemLeft;
