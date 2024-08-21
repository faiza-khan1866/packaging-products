import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton";
import { Container } from "react-bootstrap";
import bgImg from "../../../assets/images/home/taglinebg.webp";
import certf1 from "./../../../assets/images/certificates/certfic1.webp";
import certf2 from "./../../../assets/images/certificates/certfic2.webp";
import certf4 from "./../../../assets/images/certificates/certfic4.webp";
import certf6 from "./../../../assets/images/certificates/certfic6.webp";
import certf9 from "./../../../assets/images/certificates/certfic9.webp";
import certf10 from "./../../../assets/images/certificates/certfic10.webp";
import certf12 from "./../../../assets/images/certificates/certfic12.webp";
import certf13 from "./../../../assets/images/certificates/certfic13.webp";
import certfic14 from "./../../../assets/images/certificates/certfic14.webp";
import "./TagLine.scss";

const TagLine = ({ tagData, scrollTo, isLoading }) => {
  useEffect(() => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollTo]);
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

  const certData = [
    { img: certf1 },
    { img: certf2 },
    { img: certf4 },
    { img: certf6 },
    { img: certf9 },
    { img: certf10 },
    { img: certf12 },
    { img: certf13 },
    { img: certfic14 },
  ];
  return (
    <div
      id="certificates"
      className="tag-line-wrape ptb-60 mb-60"
      style={{
        backgroundImage: tagData?.featured_image
          ? `url(${
              process.env.REACT_APP_IMAGE_BASE_URL + tagData?.featured_image
            })`
          : `url(${bgImg})`,
      }}
    >
      <Container>
        <h2 data-aos="fade-up" data-aos-once="true">
          {tagData?.title}
        </h2>
        {isLoading ? (
          <Slider {...settings}>
            {Array(9)
              .fill()
              ?.map((x, i) => (
                <div className="item py-4" key={i}>
                  <div className="image-box">
                    <Skeleton height={130} width={130} circle />
                  </div>
                </div>
              ))}
          </Slider>
        ) : (
          <Slider {...settings}>
            {certData?.map((item, i) => (
              <div className="item py-4" key={i}>
                <div className="image-box">
                  <figure>
                    <img src={item?.img} alt="certificate" className="image" />
                  </figure>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </Container>
    </div>
  );
};

export default TagLine;
