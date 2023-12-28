import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import styles from "./Header.module.css"
import LearnImg from "../../../Assets/Learn-Img.png"
import StudentsImg from "../../../Assets/students-img.png"

const Header = () => {
  return (
    <div>
      <Container className={styles.container} fluid>
      <Row>
        <div className={styles.hero_container}>
          <Col
            lg={12}
            className="mx-auto  d-flex justify-content-center align-items-center img-fluid">
            <div className="mt-2">
              <img
                src={LearnImg}
                alt=""
                className={`img-fluid w-fit-content ${styles.center_img}`}
              />
              <img src={StudentsImg} alt="" />
            </div>
          </Col>
        </div>
      </Row>
      </Container>
    </div>
  )
}

export default Header
