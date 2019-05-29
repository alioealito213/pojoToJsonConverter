import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";

class JumbotronHeader extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Hello World</h1>
          <p>This is a pet project i'd like to call POJO to JSON converter.</p>
        </Container>
      </Jumbotron>
    );
  }
}

export default JumbotronHeader;
