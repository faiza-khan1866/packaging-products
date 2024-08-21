import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import recyclesustain from "./../../../assets/images/icons/recyclesustain.webp";
import "./SustainabilityFeatures.scss";

const SustainabilityFeatures = ({ cardsData }) => {
  return (
    <div className="sustaiability-features-wrape mb-60">
      <Container>
        <Row>
          {cardsData?.cardsList?.map((x, i) => (
            <Col sm={12} lg={4} key={i}>
              <div
                className="sustaiability-features"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <img
                  src={
                    x?.featured_image
                      ? process.env.REACT_APP_IMAGE_BASE_URL + x?.featured_image
                      : recyclesustain
                  }
                  alt="icon"
                  loading="lazy"
                />
                <h2>{x?.title}</h2>
              </div>
            </Col>
          ))}
        </Row>
        <p
          dangerouslySetInnerHTML={{ __html: cardsData?.description }}
          data-aos="fade-down"
          data-aos-once="true"
        />
      </Container>
    </div>
  );
};

export default SustainabilityFeatures;
