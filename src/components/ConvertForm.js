import React, { Component } from "react";
import {
  Form,
  CardGroup,
  Card,
  Row,
  Col,
  ToggleButton,
  ToggleButtonGroup,
  Alert,
  Container, Button
} from "react-bootstrap";
import UploadFile from "../components/UploadFile";
import { parsePojoText } from "./TextToPojo";
import { parseObject } from "./PojoToText";

const JSON_TO_POJO_MODE = 1;
const POJO_TO_JSON_MODE = 2;

class ConvertForm extends Component {
  state = {
    mode: JSON_TO_POJO_MODE,
    jsonText: "",
    pojoText: "",
    error: null,
    copySuccess: "",
    setCopySuccess: "",
  };

  constructor() {
    super();
    this.uploadText = this.uploadText.bind(this);
    this.uploadJson = this.uploadJson.bind(this);
    this.uploadPojo = this.uploadPojo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.textAreaJsonRef = React.createRef();
    this.textAreaPojoRef = React.createRef();
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  handleChange(value) {
    this.setState({ mode: value });
  }

  copyToClipboard(e) {
    let mode = "";
    if (this.state.mode === JSON_TO_POJO_MODE) {
      this.textAreaJsonRef.current.select();
      mode = "JSON";
    } else {
      this.textAreaPojoRef.current.select();
      mode = "POJO";
    }
    document.execCommand('copy');
    e.target.focus();
    console.log("Message copied!");
    this.setState({
      setCopySuccess: `${mode} copied!`
    })
  }

  uploadText(text) {
    this.setState({
      error: null
    });

    if (this.state.mode === JSON_TO_POJO_MODE) {
      this.uploadJson(text);
    } else {
      this.uploadPojo(text);
    }
  }

  uploadJson(text) {
    try {
      const pojo = JSON.parse(text);
      const pojoText = parseObject(pojo);

      this.setState({
        jsonText: text,
        pojoText: pojoText
      });
    } catch (e) {
      this.setState({
        error: e.message
      });
    }
  }

  uploadPojo(text) {
    try {
      const pojo = parsePojoText(text);
      const jsonText = JSON.stringify(pojo);

      this.setState({
        pojoText: text,
        jsonText: jsonText
      });
    } catch (e) {
      this.setState({
        error: e.message
      });
    }
  }

  render() {
    const { jsonText, pojoText, mode, error } = this.state;
    console.log(mode);
    return (
      <div
        style={{ backgroundColor: "#f6f5f5" }}
        className="py-5"
        id="#conversion"
      >
        <Row className="mb-1">
          <Col style={{ textAlign: "right" }}>
            <UploadFile handleUpload={this.uploadText} />
          </Col>
          <Col>
            <ToggleButtonGroup
              type="radio"
              name="pojoToJsonToggle"
              value={mode}
              onChange={this.handleChange}
            >
              <ToggleButton defaultChecked value={JSON_TO_POJO_MODE}>
                JSON to POJO
              </ToggleButton>
              <ToggleButton value={POJO_TO_JSON_MODE}>
                POJO to JSON
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>
        <Container>
          {error !== null ? (
            <Alert variant="danger">
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>{error}</p>
            </Alert>
          ) : null}
        </Container>
        <Form className="mx-5 mb-1">
          <CardGroup>
            <Card className="form-group-card mx-2">
              <Form.Group controlId="form-group-javascript">
                <Row>
                  <Col>
                    <Form.Label className="form-group-card__label">
                      POJO
                    </Form.Label>
                  </Col>
                </Row>
                <Form.Control
                  as="textarea"
                  rows="20"
                  value={pojoText}
                  readOnly
                  ref={this.textAreaPojoRef}
                />
              </Form.Group>
            </Card>
            <Card className="form-group-card  mx-2">
              <Form.Group controlId="form-group-json">
                <Row>
                  <Col>
                    <Form.Label className="form-group-card__label">
                      JSON
                    </Form.Label>
                  </Col>
                </Row>
                <Form.Control
                  as="textarea"
                  rows="20"
                  value={jsonText}
                  readOnly
                  ref={this.textAreaJsonRef}
                />
              </Form.Group>
            </Card>
          </CardGroup>
        </Form>
        {
          document.queryCommandSupported('copy') && (
            <Row className="px-5">
              <Col><Button onClick={this.copyToClipboard}>Copy converted File</Button></Col>
              {this.state.setCopySuccess !== "" && (
                // @TODO Fix displaying of alert!
                <Alert variant="success" style={{ width: 120 }}>{this.state.setCopySuccess}</Alert>
              )}
            </Row>
          )
        }
      </div>
    );
  }
}
export default ConvertForm;
