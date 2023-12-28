import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./StepThree.module.css";
import FormImage from "../../../Assets/form-img.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const StepThree = () => {
  const [formData, setFormData] = useState({
    levelOfExperience: "",
    address: "",
    country: "",
    city: "",
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
                    Step three
                  </span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12} className={styles.form_details}>
            <div className={styles.form_layout}>
              <form>
                <label htmlFor="">Level of experience</label>
                <br />
                <select name="levelOfExperience" id="" style={{width:"350px", height:"50px",borderRadius:"5px"}}
                  value={formData.levelOfExperience}
                  onChange={handleInputChange}>
                  <option value={formData.levelOfExperience}>Level of Experience</option>
                  <option value={formData.levelOfExperience}>0-6 Months</option>
                  <option value={formData.levelOfExperience}>6 Months - 1 year</option>
                  <option value={formData.levelOfExperience}>1 year - Above</option>
                </select>
                <br />
                <br />
                <label htmlFor="">Address</label>
                <br />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required

                />
                <br />
                <br />
                <label htmlFor="">Country</label>
                <br />
                <select name="country" id="" style={{width:"350px", height:"50px",borderRadius:"5px"}}
                  value={formData.country}
                  onChange={handleInputChange}>
                  <option value={formData.country}>Select Country</option>
                  <option value={formData.country}>Nigeria</option>
                  <option value={formData.country}>India</option>
                  <option value={formData.country}>Canada</option>
                  <option value={formData.country}>United Kingdom</option>
                </select>

                <br />
                <br />
                <label htmlFor="">City</label>
                <br />
                <select name="city" id="" style={{width:"350px", height:"50px", borderRadius:"5px"}}
                  value={formData.city}
                  onChange={handleInputChange}>
                  <option value={formData.city}>Select City</option>
                  <option value={formData.city}>Lagos</option>
                  <option value={formData.city}>Abuja</option>
                  <option value={formData.city}>London</option>
                  <option value={formData.city}> New York</option>
                </select>
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

export default  StepThree;
