import "./App.css";

import { useEffect } from "react";

import Navbar from "./components.js/Navbar";
import Page from "./components.js/Page";
import Footer from "./components.js/Footer";
import Header from "./components.js/Header";

import { Container, Col, Row } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid>
      <Row className="text-center">
        <Header />
      </Row>
      <Row>
        <Col xxl={2} xl={3} lg={3} sm={4} style={{ backgroundColor: "red" }}>
          <Navbar />
        </Col>
        <Col xxl={10} xl={9} lg={9} sm={8} style={{ backgroundColor: "blue" }}>
          <Page />
        </Col>
      </Row>
      <Row className="text-center">
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
