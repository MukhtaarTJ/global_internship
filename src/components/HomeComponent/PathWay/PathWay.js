import React from "react";
import styles from "./PathWay.module.css";
import { Container, Row, Col } from "react-bootstrap";

const PathWay = () => {
  return (
    <Container className={styles.container}>
      <Row className="mx-5">
        <Col lg={6} sm={12}>
          <div className={styles.professional_container}>
            <div className={styles.header_layout}>
              <p className={styles.header_text}>
                PROFESSIONAL PATHWAY Internships.
                <br />
              </p>
            </div>

            <div className={styles.bottom_text_layout}>
              <p className={styles.header_bottom_text}>
                ($20 Offered at $15 through Bistrapay)
              </p>
            </div>
            <div className={styles.advert_layout}>
              <p className={styles.advert_text}>
                The 501k Professional pathway Internship Bootcamp is aimed at
                tech professionals looking to gain experience working with teams
              </p>
            </div>
            <div className={styles.list_layout}>
              <ul>
                <li>3 weekly mentor-ship live classes</li>
                <li>Weekly projects/Portofolio development</li>
                <li>Real-time-teams & product-led projects</li>
                <li>Opportunities for real-time job placements</li>
                <li>Recommendation Letter</li>
              </ul>
            </div>
          </div>
        </Col>
        <Col lg={6} sm={12}>
          <div className={styles.startup_container}>
            <div className={styles.header_layout}>
              <p className={styles.header_text}>
                STARTUPS/ ENTREPRENEURSHIP PROGRAM
                <br />
              </p>
            </div>

            <div className={styles.bottom_text_layout}>
              <p className={styles.header_bottom_text}>
                ($150 Offered at $130 through Bistrapay)
              </p>
            </div>
            <div className={styles.advert_layout}>
              <p className={styles.advert_text}>
                The 501k Internship startups/Entrepreneurs Bootcamp is aimed at
                innovative tech-stars looking to startup and launch products.
              </p>
            </div>
            <div className={styles.list_layout}>
              <ul>
                <li>Idea/innovation assistance(documentation)</li>
                <li>Software development guidance & training.</li>
                <li>Free MVP development for entrepreneurs.</li>
                <li>Free Legal, financial & product management expertise.</li>
                <li>Guided assistance through pitch and Launch phase.</li>
                <li>Technical team building & recruiting phase.</li>
                <li>Open opportunities to partner with co-founders startups and other startup leaders.</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PathWay;
