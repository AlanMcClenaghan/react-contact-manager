import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  // Destructing props
  const { heading } = props;
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "50px" }}>{heading}</h1>
    </div>
  );
}

Header.defaultProps = {
  heading: "My App"
};

Header.propTypes = {
  heading: PropTypes.string.isRequired
};

export default Header;
