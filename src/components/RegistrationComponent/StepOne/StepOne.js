import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./StepOne.module.css";
import FormImage from "../../../Assets/form-img.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const StepOne = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Container>
        <Row className={styles.form_background}>
          <Col lg={6} sm={12} className={styles.container}>
            {/* <img src={FormImage} alt="" className={styles.form_image} /> */}
            <div className={styles.text_section}>
              <div className={styles.top_text_layout}>
                <p className={styles.top_text}>
                  get Started for{" "}
                  <span style={{ color: "#b59857", fontWeight: "700" }}>
                    free
                  </span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12} className={styles.form_details}>
            <div className={styles.form_layout}>
              <form>
                <label htmlFor="">First name</label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <br />
                <br />
                <label htmlFor="">Last name</label>
                <br />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required

                />
                <br />
                <br />
                <label htmlFor="">Email address</label>
                <br />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required

                />
                <br />
                <br />
                <label htmlFor="">Phone number</label>
                <br />
                <input
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required

                />
                <br />
                <br />
                <Link
                  to="/steptwo"
                  style={{ marginBottom: "4rem" }}
                  className={styles.next_btn}>
                  Next
                </Link>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StepOne;
