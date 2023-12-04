import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./HeaderLanding.module.css";

const HeaderLanding = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`${styles.container} me-auto`}>
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">ABOUT</Nav.Link>
              <Nav.Link href="#link">PROJECT</Nav.Link>
              {/* <Nav.Link href="#link">CONTACT</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderLanding;
