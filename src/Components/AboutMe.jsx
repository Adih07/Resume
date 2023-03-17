import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div>
      <Navbar.Brand className=" d-flex flex-column align-items-start ">
        <>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h4>⚜️</h4>
          </Link>
          <Link to="/education" style={{ textDecoration: "none" }}>
            <Navbar.Brand style={{ color: "gold" }}>Education</Navbar.Brand>
          </Link>

          <Link to="/hobby" style={{ textDecoration: "none" }}>
            <Navbar.Brand style={{ color: "gold" }}>Hobby</Navbar.Brand>
          </Link>
          <Link to="/skills" style={{ textDecoration: "none" }}>
            <Navbar.Brand style={{ color: "gold" }}>Skills</Navbar.Brand>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Navbar.Brand style={{ color: "gold" }}>Contact</Navbar.Brand>
          </Link>
        </>
      </Navbar.Brand>
    </div>
  );
};

export default AboutMe;
