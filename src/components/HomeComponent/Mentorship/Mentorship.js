import { Col, Container, Row } from "react-bootstrap";
import styles from "./Mentorship.module.css";
import React from "react";
import FirstMentor from "../../../Assets/First-mentor.png";
import SecondMentor from "../../../Assets/second-mentor.png";
import ThirdMentor from "../../../Assets/Third-mentor.png";
import { FaArrowRight } from "react-icons/fa6";


const Mentorship = () => {
  return (
    <Container className={styles.container}>
      <Col>
        <h1 className={styles.header_text}>
          Looking for a Mentor <span style={{ color: "black" }}>?</span>
        </h1>
        <h1 className={styles.bottom_text}>
          <span style={{ color: "#b57cd8", fontWeight: "700" }}>501K</span> is
          the easiest platform to find a mentor. free for a lifetime of guided
          assistance
        </h1>
      </Col>

      <Row className="mt-5">
        <Col sm={12} className={styles.mentor_column}>
          <div style={{}}>
            <img src={FirstMentor} alt="" />
            <p className={styles.mentor_text}>
              The 501k Startup/Entrepreneurs program really helped me master the
              art of team building and management. Today i have a successful
              startup.
              <br /> <span className="fw-bold"> Joe fox, Canada.</span>
            </p>
          </div>
        </Col>
        <Col sm={12} className={styles.mentor_column}>
          <div style={{}}>
            <img src={SecondMentor} alt="" />
            <p className={styles.mentor_text}>
              The 501k Startup/Entrepreneurs program really helped me master the
              art of team building and management. Today i have a successful
              startup.
              <br /> <span className="fw-bold"> Joe fox, Canada.</span>
            </p>
          </div>
        </Col>
        <Col sm={12} className={styles.mentor_column}>
          <div style={{}}>
            <img src={ThirdMentor} alt="" />
            <p className={styles.mentor_text}>
              The 501k Startup/Entrepreneurs program really helped me master the
              art of team building and management. Today i have a successful
              startup.
              <br /> <span className="fw-bold"> Joe fox, Canada.</span>
            </p>
          </div>
        </Col>
        <div className={styles.meet_mentor}>
          <span className={styles.meet_mentor_text}>meet a mentor <FaArrowRight/></span>
        </div>
      </Row>
    </Container>
  );
};

export default Mentorship;
