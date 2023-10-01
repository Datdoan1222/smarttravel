import React from "react";

function ItemRight({ children, title, textTitle }) {
  return (
    <div className="Item-right">
      <div className="Item-right-content">
        <div>
          <p className="Item-right-title">{title}</p>
          <p className="Item-right-text">{textTitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

export default ItemRight;
