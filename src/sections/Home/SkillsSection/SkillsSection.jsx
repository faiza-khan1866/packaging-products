import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skilbg from "../../../assets/images/home/skillbg.webp";
import recycle from "../../../assets/images/home/recycle.webp";
import recycleicon from "../../../assets/images/home/recycleicon.webp";
import "./SkillsSection.scss";

var settings = {
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  fade: true,
};

const SkillsSection = ({ skillSliderData, skillData, isLoading }) => {
  return (
    <Container>
      <div className="skills-wrape mtb-60">
        <Row>
          <Col
            sm={12}
            lg={6}
            className="skillbg"
            style={{
              backgroundImage: skillData?.featured_image
                ? `url(${
                    process.env.REACT_APP_IMAGE_BASE_URL +
                    skillData?.featured_image
                  })`
                : `url(${skilbg})`,
            }}
          >
            <div
              className="expsection"
              data-aos="fade-down"
              data-aos-once="true"
            >
              <h2>{isLoading ? <Skeleton /> : skillData?.exp_years}</h2>
              <h3>YEARS OF EXPERIENCE</h3>
            </div>
            {isLoading ? (
              <Slider
                {...settings}
                className="slider-wrape"
                data-aos="fade-up"
                data-aos-once="true"
              >
                {Array(4)
                  .fill()
                  ?.map((x, i) => (
                    <div className="item" key={i}>
                      <div className="slidersection">
                        <Skeleton
                          height={80}
                          width={80}
                          circle
                          style={{ marginBottom: "1rem" }}
                        />
                        <h2>
                          <Skeleton />
                        </h2>
                        <p>
                          <Skeleton count={5} />
                        </p>
                      </div>
                    </div>
                  ))}
              </Slider>
            ) : (
              <Slider
                {...settings}
                className="slider-wrape"
                data-aos="fade-up"
                data-aos-once="true"
              >
                {skillSliderData?.map((x, i) => (
                  <div className="item" key={i}>
                    <div className="slidersection">
                      <figure>
                        <img src={recycleicon} alt="icon" />
                      </figure>
                      <h2>{x?.title}</h2>
                      <p dangerouslySetInnerHTML={{ __html: x?.description }} />
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </Col>
          <Col sm={12} lg={6}>
            <div
              className="description-wrape"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <h2 className="title">
                {isLoading ? <Skeleton /> : skillData?.title}
              </h2>
              <h2 className="title">
                {isLoading ? <Skeleton /> : skillData?.sub_title}
              </h2>
              {isLoading ? (
                <Skeleton count={15} />
              ) : (
                <p
                  className="description"
                  dangerouslySetInnerHTML={{ __html: skillData?.description }}
                />
              )}
              {/* <Button className="read-more-btn">Read More</Button> */}
              <hr />
              <Row className="desdetail align-items-center">
                <Col
                  sm
                  className="d-flex justify-content-center align-items-center"
                >
                  <figure>
                    <img src={recycle} alt="img" />
                  </figure>
                </Col>
                <Col sm>
                  <span>Recycle Products</span>
                </Col>
                <Col
                  sm
                  className="d-flex justify-content-center align-items-center"
                >
                  <figure>
                    <img src={recycle} alt="img" />
                  </figure>
                </Col>
                <Col sm>
                  <span>Recycle Products</span>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SkillsSection;
