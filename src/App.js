import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header heading="Contact Manager" />
      <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
      <Contact
        name="Karen Smith"
        email="ksmith@gmail.com"
        phone="555-555-6666"
      />
    </div>
  );
}

export default App;
