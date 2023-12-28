import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./StepTwo.module.css";
import FormImage from "../../../Assets/form-img.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const StepTwo = () => {
  const [formData, setFormData] = useState({
    prefferedUserName: "",
    password: "",
    confirmPassword: "",
    selectProgram: "",
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
                <p className={styles.top_text}>get Started for <span style={{color:"#b59857", fontWeight:"700"}}>steptwo</span></p>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12} className={styles.form_details}>
            <div className={styles.form_layout}>
              <form>
                <label htmlFor="">Preffered Username</label>
                <br />
                <input type="text"
                name="prefferedUserName"
                value={formData.prefferedUserName}
                onChange={handleInputChange}
                />
                <br />
                <br />
                <label htmlFor="">Password</label>
                <br />
                <input type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                />
                <br />
                <br />
                <label htmlFor="">Confirm Password</label>
                <br />
                <input type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                />
                <br />
                <br />
                <label htmlFor="">Select Program</label>
                <br />
                <select name="selectProgram" id="" style={{width:"350px", height:"50px"}}
                  value={formData.selectProgram}
                  onChange={handleInputChange}>
                  <option value="">select program</option>
                  <option value="">career starter</option>
                  <option value="">professional pathway</option>
                  <option value="">startup/Entreprenuership</option>
                </select>
                <br />
                <br />
                <Link to="/stepthree" style={{marginBottom:"4rem"}} className={styles.next_btn}>Next</Link>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StepTwo;
