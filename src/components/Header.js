import React from "react";

function Header(props) {
  // Destructing props
  const { heading } = props;
  return (
    <div>
      <h1>{heading}</h1>
    </div>
  );
}

export default Header;
