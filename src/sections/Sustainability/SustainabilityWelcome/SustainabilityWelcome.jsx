import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import sustaiabilityWelcome from "../../../assets/images/sustainability/sustaiabilityWelcome.png";
import certf1 from "../../../assets/images/sustainability/certf1.png";
import "./SustainabilityWelcome.scss";

const SustainabilityWelcome = ({ ecoData, certifData }) => {
  return (
    <Container>
      <div className="sustainability-welcome mb-60">
        <Row className="align-items-center">
          <Col sm={12} lg={6}>
            <img
              src={
                ecoData?.featured_image
                  ? process.env.REACT_APP_IMAGE_BASE_URL +
                    ecoData?.featured_image
                  : sustaiabilityWelcome
              }
              alt="intro-img"
              className="img-fluid"
              loading="lazy"
              data-aos="fade-down"
              data-aos-once="true"
            />
          </Col>
          <Col sm>
            <div
              className="description-wrape"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <h2 className="title">{ecoData?.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: ecoData?.description }} />
              <div className="icons-wrape">
                {certifData?.map((x, i) => (
                  <img
                    key={i}
                    src={
                      x?.featured_image
                        ? process.env.REACT_APP_IMAGE_BASE_URL +
                          x?.featured_image
                        : certf1
                    }
                    alt="icon"
                    className="img-fluid"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SustainabilityWelcome;
