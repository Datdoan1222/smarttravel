import React from "react";
import "../../contans/styles/log.scss";
function Button({ children, onClick = "" }) {
  return (
    <div className="button-container">
      <button className="button" onClick={onClick} type="submit">
        {children}
      </button>
    </div>
  );
}

export default Button;
