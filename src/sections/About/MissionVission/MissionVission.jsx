import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mission from "../../../assets/images/about/mission.webp";
import "./MissionVission.scss";

const MissionVission = ({ missionData }) => {
  return (
    <Container>
      <div className="mission-vision-welcome ptb-60">
        <Row>
          {missionData?.map((x, i) => (
            <Col sm={12} md={6} lg={6} key={i}>
              <div
                className="description-wrape"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <div className={i == 1 && "img_mbl_wraper"}>
                  <figure>
                    <img
                      src={
                        x?.featured_image
                          ? process.env.REACT_APP_IMAGE_BASE_URL +
                            x?.featured_image
                          : mission
                      }
                      alt="intro-img"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <h2 className="title">{x?.title}</h2>
                <p
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: x?.description,
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default MissionVission;
