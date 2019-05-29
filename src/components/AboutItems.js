import React, { Component } from "react";
import { Card } from "react-bootstrap";

class AboutItems extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <section className="about-pojo__background">
          <Card className="py-5 mx-5 form-group-card" style={{ color: "#fff" }}>
            <Card.Header>
              <h1>About POJO</h1>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  POJO stands for Plain Old Java Object. It is an ordinary Java
                  object, not bound by any special restriction other than those
                  forced by the Java Language Specification and not requiring
                  any class path. POJOs are used for increasing the readability
                  and re-usability of a program.
                </p>
                <footer className="blockquote-footer">
                  <cite title="GeeksforGeeks" style={{ color: "#fff" }}>
                    GeeksforGeeks
                  </cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </section>

        <section className="about-json__background">
          <Card
            className="py-5 mx-5 form-group-card"
            style={{ color: "#fff", textAlign: "right" }}
          >
            <Card.Header>
              <h1>About JSON</h1>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  JSON or JavaScript Object Notation is a lightweight format for
                  transporting and storing data. JSON is used when data is
                  transferred from a server to a web page. This language is also
                  characterized as weakly typed, prototype-based, dynamic, and
                  multi-paradigm.
                </p>
                <footer className="blockquote-footer">
                  <cite title="GeeksforGeeks" style={{ color: "#fff" }}>
                    GeeksforGeeks
                  </cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </section>
      </div>
    );
  }
}

export default AboutItems;
