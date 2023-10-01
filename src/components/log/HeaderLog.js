import React from "react";

function HeaderLog({logo}) {
  return (
    <header className="Header">
      <div className="header-logo">
        <img src={logo} className="image-logo" alt="logo" />
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default HeaderLog;
