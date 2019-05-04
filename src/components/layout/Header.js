import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  // Destructing props
  const { heading } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {heading}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  heading: "My App"
};

Header.propTypes = {
  heading: PropTypes.string.isRequired
};

export default Header;
