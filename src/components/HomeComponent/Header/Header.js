import React from "react";
import styles from "./Header.module.css";
import { Container, Row, Col } from "react-bootstrap";
import centerimg from "../../../Assets/CenterImage.png";

const Header = () => {
  return (
    <Container className={styles.container} fluid>
      <Row>
        <div className={styles.hero_container}>
          <Col
            lg={12}
            className="mx-auto  d-flex justify-content-center align-items-center img-fluid">
            <div className="mt-2">
              <img
                src={centerimg}
                alt=""
                className={`img-fluid w-fit-content ${styles.center_img}`}
              />
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Header;
