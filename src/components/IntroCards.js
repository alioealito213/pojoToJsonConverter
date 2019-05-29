import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
import pic1 from "../assets/images/action-blur-close-up.jpg";
import pic2 from "../assets/images/alternative-energy-background-blue.jpg";
import pic3 from "../assets/images/close-up-code-coding.jpg";

class IntroCards extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }} className="py-2 mx-5">
        <header className="mb-5">
          <h1 style={{ color: "#fff" }}>What does it do?</h1>
        </header>
        <section className="mb-5">
          <CardGroup>
            <Card className="mx-2">
              <Card.Img variant="top" src={pic1} style={{ padding: 5 }} />
              <Card.Body>
                <Card.Title>Javascript to JSON</Card.Title>
                <Card.Text>
                  Convert your pesky Javascript lines to beautiful JSON
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mx-2">
              <Card.Img variant="top" src={pic2} style={{ padding: 5 }} />
              <Card.Body>
                <Card.Title>Prettify your code</Card.Title>
                <Card.Text>
                  Have the option to prettify your lines of code
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mx-2">
              <Card.Img variant="top" src={pic3} style={{ padding: 5 }} />
              <Card.Body>
                <Card.Title>JSON to Javascript</Card.Title>
                <Card.Text>
                  Convert your JSON lines to simple Javascript lines
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </section>
      </div>
    );
  }
}

export default IntroCards;
