import React from "react";
import styles from "./Intro.module.css";
import { Container, Row, Col } from "react-bootstrap";
import sponsors from "../../../Assets/sponsors.png";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div>
      <Container className="mt-5">
        <h2 className={styles.top_text}>sponsored by</h2>
        <Row>
          <div className={styles.header_image}>
            <img src={sponsors} alt="" className={styles.sponsors} />
          </div>
        </Row>
        <div className={`d-flex ${styles.career_paths}`}>
          <Row>
            <Col lg={6} sm={12}>
              <div className={styles.intro_layout}>
                <p className={styles.intro_top_text}>
                  <span style={{ fontWeight: "bolder", color: "#b57cd8" }}>
                    {" "}
                    Over 1000+{" "}
                  </span>
                  interns apply monthly.{" "}
                  <span style={{ fontWeight: "bolder", color: "#b57cd8" }}>
                    80%{" "}
                  </span>
                  are employed upon completion, while{" "}
                  <span style={{ fontWeight: "bolder", color: "#b57cd8" }}>
                    {" "}
                    20%{" "}
                  </span>
                  launch their startups.
                </p>
                <p className={styles.intro_bottom_text}>
                  The 501k Internship Bootcamp provides a core technical
                  platform for skill development, through concentrated
                  internships, focused on product-led; user-first curriculum's
                  and work-lab models.
                </p>
                <Link to="/stepone" className={styles.join_now_link}>
                  join now </Link>
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <div className={styles.career_starter_container}>
                <div className={styles.header_layout}>
                  <p className={styles.header_text}>
                    CAREER-
                    <br /> STARTER
                    <br /> Internships. <br />
                    <span className="fs-6 text-uppercase fw-medium pt-0">
                      (free)
                    </span>
                  </p>
                </div>
                <div className={styles.advert_layout}>
                  <p className={styles.advert_text}>
                    The 501k Internship Bootcamp is aimed at tech starters
                    looking to gain experience working with teams and gaining
                    practical experience.
                  </p>
                </div>
                <div className={`${styles.advert_list_layout}`}>
                  <ul>
                    <li>1 real-time-team project</li>
                    <li>weekly mentor-ship (Once every week)</li>
                    <li>Certification of participation</li>
                    <li>Team Building & individual networking</li>
                  </ul>
                </div>
                <div className={styles.button_layout}>
                  <button>learn more</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
