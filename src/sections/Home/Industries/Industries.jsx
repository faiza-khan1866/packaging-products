import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton";
import catering from "./../../../assets/images/icons/catering.webp";
import cateringcolor from "./../../../assets/images/icons/cateringcolor.webp";
import "./Industries.scss";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  lazyLoad: true,
  arrows: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const Industries = ({ industriesData, isLoading }) => {
  return (
    <div className="mb-60 industries-wrape">
      <Container>
        <h2 className="title">Industries We Serve</h2>
        {isLoading ? (
          <Slider {...settings}>
            {Array(8)
              .fill()
              ?.map((x, i) => (
                <div className="item py-4" key={i}>
                  <div
                    className="industries-detail"
                    data-aos="fade-up"
                    data-aos-once="true"
                  >
                    <Skeleton
                      height={100}
                      width={100}
                      style={{ marginBottom: "1rem" }}
                    />
                    <p>
                      <Skeleton />
                    </p>
                  </div>
                </div>
              ))}
          </Slider>
        ) : (
          <Slider {...settings}>
            {industriesData?.map((x, i) => (
              <div className="item py-4" key={i}>
                <div
                  className="industries-detail"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <figure>
                    <img
                      src={
                        x?.featured_image
                          ? process.env.REACT_APP_IMAGE_BASE_URL +
                            x?.featured_image
                          : catering
                      }
                      alt="icon"
                      className="mainImg"
                    />
                    <img
                      src={
                        x?.featured_image_hover
                          ? process.env.REACT_APP_IMAGE_BASE_URL +
                            x?.featured_image_hover
                          : cateringcolor
                      }
                      alt="icon"
                      className="hoverImg"
                    />
                  </figure>
                  <p dangerouslySetInnerHTML={{ __html: x?.title }} />
                </div>
              </div>
            ))}
          </Slider>
        )}
      </Container>
    </div>
  );
};

export default Industries;
