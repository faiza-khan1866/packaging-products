import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import foamTry from "../../../assets/images/features/featureImg.webp";
import "./FeaturesList.scss";

const FeaturesList = ({ introData, featureData }) => {
  return (
    <>
      <div className="about-features-intro-wrape ptb-60">
        <Container>
          <h2 data-aos="fade-down" data-aos-once="true">
            {introData?.title}
          </h2>
          <h3 data-aos="fade-down" data-aos-once="true">
            {introData?.subtitle}
          </h3>
        </Container>
      </div>
      <div className="about-features-main-wrape ptb-60">
        <Container>
          {featureData?.map((item, index) => (
            <Row className="align-items-center">
              <Col
                sm={12}
                md={12}
                lg={{ span: 6, order: index % 2 == 0 ? 1 : 2 }}
                style={{ paddingLeft: 0, paddingRight: 0 }}
              >
                <div
                  className="about-featured_image_container"
                  data-aos="fade-down"
                  data-aos-once="true"
                >
                  <figure>
                    <img
                      src={
                        item?.featured_image
                          ? process.env.REACT_APP_IMAGE_BASE_URL +
                            item?.featured_image
                          : foamTry
                      }
                      alt="featured_image"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </Col>
              <Col
                sm={12}
                md={12}
                lg={{ span: 6, order: index % 2 == 0 ? 2 : 1 }}
              >
                <div
                  className="about-featured_details_container"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <h3 className="about-featured_title">{item?.title}</h3>
                  <div className="about-featured_detailsList">
                    <p
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </>
  );
};

export default FeaturesList;
