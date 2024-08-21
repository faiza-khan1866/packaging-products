import React from "react";
import Skeleton from "react-loading-skeleton";
import { Col, Container, Row } from "react-bootstrap";
import units from "./../../../assets/images/icons/units.webp";
import "./Features.scss";

const Features = ({ featuresData, isLoading }) => {
  return (
    <div className="mb-60">
      <Container>
        {isLoading ? (
          <Row>
            {featuresData?.map((x, i) => (
              <Col sm={6} lg={3} key={i} className="features_mbl_space">
                <div
                  className="features-wrape"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <Skeleton
                    height={80}
                    width={80}
                    style={{ marginBottom: "1rem" }}
                  />
                  <h2>
                    <Skeleton />
                  </h2>
                  <p>
                    <Skeleton />
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <Row>
            {featuresData?.map((x, i) => (
              <Col sm={6} lg={3} key={i} className="features_mbl_space">
                <div
                  className="features-wrape"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <figure>
                    <img
                      src={
                        x?.featured_image
                          ? process.env.REACT_APP_IMAGE_BASE_URL +
                            x?.featured_image
                          : units
                      }
                      alt="icon"
                      loading="lazy"
                      className="image"
                    />
                  </figure>
                  <h2>{x?.count}</h2>
                  <p>{x?.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Features;
