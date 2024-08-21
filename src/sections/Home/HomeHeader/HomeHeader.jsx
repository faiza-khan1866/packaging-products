import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "./../../../assets/images/banner/homebanner.webp";
import "./HomeHeader.scss";

const HomeHeader = ({ sliderData }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCharIndex((prevIndex) => {
        const title = sliderData[currentLine].title;
        if (prevIndex < title.length) {
          return prevIndex + 1;
        } else {
          clearInterval(interval); // Stop the typing animation when it reaches the end
          return prevIndex;
        }
      });
    }, 100); // Adjust typing speed as needed

    return () => clearInterval(interval);
  }, [currentLine, sliderData]);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    fade: true,
    beforeChange: (oldIndex, newIndex) => {
      // Reset typing animation when changing to a new slide
      setCurrentLine(newIndex);
      setCurrentCharIndex(0);
    },
  };

  return (
    <Slider {...settings} className="bannerslider">
      {sliderData?.map((x, i) => (
        <div className="item" key={i}>
          <div className="home-header">
            <div
              className="background-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: x?.background_image
                  ? `url(${
                      process.env.REACT_APP_IMAGE_BASE_URL + x?.background_image
                    })`
                  : `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -1,
              }}
            ></div>
            <div className="description-wrape">
              <div className="content-wrape">
                <h1 className="title">
                  {x.title
                    .substring(0, currentCharIndex)
                    .split("<br>")
                    .map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HomeHeader;
