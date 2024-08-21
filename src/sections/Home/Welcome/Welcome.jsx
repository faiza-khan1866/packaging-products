import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Container, Row, Col, Button } from "react-bootstrap";
import welcome from "../../../assets/images/home/welcome.webp";
import { useNavigate } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "./Welcome.scss";

const Welcome = ({ welcomeData, isLoading }) => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const youTubeUrl = "https://youtu.be/ckdwMKymKak?si=-e3nzQSKs_6DtNPE";
  const videoId = youTubeUrl.split("/").pop();
  return (
    <Container>
      <div className="welcome mtb-60">
        <Row className="align-items-center">
          <Col sm={12} lg={6}>
            <div
              className="image-container"
              data-aos="fade-down"
              data-aos-once="true"
            >
              <figure>
                <img
                  src={
                    welcomeData?.thumbnail
                      ? process.env.REACT_APP_IMAGE_BASE_URL +
                        welcomeData?.thumbnail
                      : welcome
                  }
                  alt="intro-img"
                  className="image"
                  loading="lazy"
                />
              </figure>

              <div className="play-icon" onClick={() => setOpen(true)}></div>
            </div>
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen}
              videoId={videoId}
              onClose={() => setOpen(false)}
            />
          </Col>
          <Col sm={12} lg={6}>
            <div
              className="description-wrape"
              data-aos="fade-up"
              data-aos-once="true"
            >
              {isLoading ? (
                <h2>
                  <Skeleton />
                </h2>
              ) : (
                <h2
                  className="title"
                  dangerouslySetInnerHTML={{ __html: welcomeData?.title }}
                />
              )}
              {isLoading ? (
                <p>
                  <Skeleton count={10} />
                </p>
              ) : (
                <p
                  className="description"
                  dangerouslySetInnerHTML={{ __html: welcomeData?.description }}
                />
              )}
              {isLoading ? (
                <Skeleton height={50} width={"30%"} />
              ) : (
                <Button
                  className="read-more-btn"
                  onClick={() => navigate("/about")}
                >
                  Read More
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Welcome;
