import React from "react";
import styles from "./Footer.module.css";
import { Container, Col, Row } from "react-bootstrap";
import BackgroundLogo from "../../Assets/NavImg.png";
import envelope from "../../Assets/envelope.png";
import whatsapp from "../../Assets/whatsapp.png";
import linkedin from "../../Assets/linkdn.png";
import twitter from "../../Assets/twitter.png";

const Footer = () => {
  return (
    <Container className={styles.container} >
      <Col className={styles.form_container}>
        <div
          className={`border mx-auto p-4 ${styles.form_background}`}
          style={{ width: "fit-content" }}>
          <form action="" className="border">
            <input type="text" className={styles.input_layout} />
            <button className={styles.sub_btn}>subscribe</button>
          </form>
        </div>
      </Col>
      <Row>
        
      </Row>
    </Container>
  );
};

export default Footer;
