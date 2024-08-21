import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Container } from "react-bootstrap";
import product from "../../../assets/images/products/product.webp";
import hoverProductImg from "../../../assets/images/products/producthover.webp";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import "./SustainabilityRelatedProducts.scss";

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  lazyLoad: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SustainabilityRelatedProducts = ({ relatedProductData }) => {
  const navigate = useNavigate();

  //creating the ref
  const customeSlider = React.useRef();

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  return (
    <div className="sustaiability-related-products-wrape pb-60">
      <h2 className="main-title" data-aos="fade-down" data-aos-once="true">
        Related Products
      </h2>
      <Container>
        <div className="custom-arrows">
          <button onClick={() => gotoPrev()}>
            <HiOutlineArrowSmLeft />
          </button>
          <button onClick={() => gotoNext()}>
            <HiOutlineArrowSmRight />
          </button>
        </div>
        <Slider {...settings} ref={customeSlider}>
          {relatedProductData?.map((item) => (
            <div className="item" key={item?.id}>
              <div
                className="product-item"
                data-aos="zoom-in"
                data-aos-once="true"
              >
                <div className="image-box">
                  <img
                    src={
                      item?.featured_img
                        ? process.env.REACT_APP_IMAGE_BASE_URL +
                          item?.featured_img
                        : product
                    }
                    alt="product Img"
                    loading="lazy"
                  />
                  <img
                    src={
                      item?.hover_img
                        ? process.env.REACT_APP_IMAGE_BASE_URL + item?.hover_img
                        : hoverProductImg
                    }
                    alt="product Img"
                    className="hoverImg"
                    loading="lazy"
                  />
                  <Button
                    className="buy-now-btn"
                    onClick={() => navigate(`/product/category/${item?.route}`)}
                  >
                    {/* Buy Now */}
                    Add To Quote
                  </Button>
                </div>
                <h3>{item?.name}</h3>
                {/* <p>AED {item?.product_variations[0]?.price}</p> */}
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default SustainabilityRelatedProducts;
