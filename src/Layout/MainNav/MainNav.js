import React from "react";
import styles from "./MainNav.module.css";
import { Nav, Navbar, Container,  } from "react-bootstrap";
import NavImg from "../../Assets/NavImg.png"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const MainNav = () => {
  return (
    <>
      <Navbar expand="lg"   className={styles.navbar}>
        <Container  className="">
          <Navbar.Brand className={styles.navbrand}>
            <img src={NavImg} alt="" className={styles.nav_img}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:"#fff"}} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll></Nav>
            <Nav className={styles.nav_links}>
              <NavLink to="/" className={styles.link}>Home</NavLink>
              <NavLink to="/about" className={styles.link}>About Us</NavLink>
              <NavLink className={styles.link}>Contact Us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNav;
