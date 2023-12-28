import React from "react";
import styles from "./Hero.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.top_text_layout}>
            <p className={styles.top_text}>
              The{" "}
              <span style={{ color: "#bb86db", fontWeight: "700" }}>NEED</span>{" "}
              for online education <br /> is continuously growing, but there's
              <br />a need for{" "}
              <span style={{ color: "#bb86db", fontWeight: "700" }}>
                {" "}
                practical, job-ready skills.{" "}
              </span>
              <br /> the 501k Global Internships, offer a variety
              <br /> of courses, with hands-on experience/projects
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.bottom_text_layout}>
            <p className={styles.bottom_text}>
              The 501k Internship Bootcamp aims to bridge the gap between
              traditional education and practical knowledge by providing
              product-led hands on trainings for our diverse group of
              participants, including students, self-learners, and aspiring
              entrepreneurs. This intensive work-lab program prepares them for
              the evolving job market.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.application_section}>
            <button>Apply Now</button>{" "}
            <span className={styles.meet_mentor_text}>
              Meet a mentor <FaArrowRight />
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
