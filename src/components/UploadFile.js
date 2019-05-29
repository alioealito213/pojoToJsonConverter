import React, { Component } from "react";
// import { Input } from "react-bootstrap";

class UploadFile extends Component {
  constructor() {
    super();
    this.handleFileRead = this.handleFileRead.bind(this);
  }

  // Send the file result to parent to be processed
  handleFileRead = e => {
    e.stopPropagation();
    this.props.handleUpload(e.target.result);
  };

  handleFileChosen = file => {
    let fileReader = new FileReader();
    fileReader.onloadend = this.handleFileRead;
    fileReader.readAsText(file);
  };

  render() {
    return (
      <span style={{ textAlign: "right" }}>
        <input
          type="file"
          id="file"
          className="input-file"
          style={{ fontSize: 12 }}
          accept=".txt,.json,.js"
          onChange={e => this.handleFileChosen(e.target.files[0])}
        />
      </span>
    );
  }
}
export default UploadFile;
