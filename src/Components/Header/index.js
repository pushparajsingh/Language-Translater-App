import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Asserts/Image/Translater.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Language Converter"
              title="Language Converter"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            &nbsp; Language Converter
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => navigate("/")}
                className={pathname == "/" ? "active" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate("/about")}
                className={pathname == "/about" ? "active" : ""}
              >
                About
              </Nav.Link>
              <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => changeLanguage("english")}>
                  English
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage("hindi")}>
                  Hindi
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage("turkish")}>
                  Turkey
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
