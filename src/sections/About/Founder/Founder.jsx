import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import founder from "../../../assets/images/about/founder.webp";
import "./Founder.scss";

const Founder = ({ founderData }) => {
  return (
    <div className="founder-wrape ptb-60">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={5} lg={5} className="img_wraper">
            <figure>
              <img
                src={
                  founderData?.featured_image
                    ? process.env.REACT_APP_IMAGE_BASE_URL +
                      founderData?.featured_image
                    : founder
                }
                alt="intro-img"
                className="image"
                loading="lazy"
                data-aos="fade-down"
                data-aos-once="true"
              />
            </figure>
          </Col>
          <Col sm>
            <div
              className="description-wrape"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <h2 className="title">{founderData?.title}</h2>
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: founderData?.description }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Founder;
