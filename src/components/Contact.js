import React, { Component } from "react";
import PropTypes from "prop-types";
import "./contact.css";

class Contact extends Component {
  // PropTypes as static method in class
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };

  render() {
    // Destructing this.props
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4 style={headingStyling}>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

// PropsTypes outside the class
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

const headingStyling = {
  color: "blue",
  fontSize: "20px",
  textTransform: "uppercase"
};

export default Contact;
