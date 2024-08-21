import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import thumb1 from "../../assets/images/factories/factoryImg.webp";
import "./FactoriesMain.scss";

const FactoriesMain = ({ factoryData }) => {
  return (
    <div className="factories_main_wraper pb-60">
      <Container>
        {factoryData?.map((item, index) => (
          <Row className="align-items-center" key={index}>
            <Col
              sm={12}
              md={12}
              lg={{ span: 6, order: index % 2 == 0 ? 1 : 2 }}
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <div
                className="featured_image_container"
                data-aos="fade-down"
                data-aos-once="true"
              >
                <figure>
                  <img
                    src={
                      item?.featured_image
                        ? process.env.REACT_APP_IMAGE_BASE_URL +
                          item?.featured_image
                        : thumb1
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
                className="featured_details_container text-center"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <h3
                  className="featured_title"
                  dangerouslySetInnerHTML={{ __html: item?.title }}
                ></h3>
                <div className="featured_detailsList">
                  <p dangerouslySetInnerHTML={{ __html: item?.description }} />
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default FactoriesMain;
