import "./App.css";

import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Container, Col, Row } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid>
      <Row className="text-center">
        <Header />
      </Row>
      <Row>
        <Col
          xxl={2}
          xl={3}
          lg={3}
          sm={4}
          style={{ backgroundColor: "#383E4B" }}
        >
          <Navbar />
        </Col>
        <Col
          xxl={10}
          xl={9}
          lg={9}
          sm={8}
          style={{ backgroundColor: "#F5F5F5" }}
        >
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
