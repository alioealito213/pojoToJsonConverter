import React, { Component } from "react";

class FooterContent extends Component {
  render() {
    return (
      <footer
        style={{
          backgroundColor: "#1d1919",
          textAlign: "center",
          color: "#fff",
          fontSize: 12
        }}
        className="py-3"
      >
        <p>&copy; 2019</p>
      </footer>
    );
  }
}

export default FooterContent;
