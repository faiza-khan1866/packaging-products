import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutWelcome.scss";

const AboutWelcome = ({ welcomeData }) => {
  return (
    <Container>
      <div className="about-welcome pb-60">
        <Row className="align-items-center">
          <Col sm={12}>
            <div
              className="description-wrape"
              data-aos="fade-down"
              data-aos-once="true"
            >
              <h2 className="title">{welcomeData?.title}</h2>
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: welcomeData?.description }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AboutWelcome;
