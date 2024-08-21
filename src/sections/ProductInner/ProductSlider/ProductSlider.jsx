import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaExpandArrowsAlt } from "react-icons/fa";
import "./ProductSlider.scss";

const ProductSlider = ({ sliderData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lightboxSlides, setLightboxSlides] = useState([]);

  useEffect(() => {
    if (sliderData) {
      setIsOpen(false);
      setPhotoIndex(0);
      setLightboxSlides(
        sliderData.map((img) => ({
          src: process.env.REACT_APP_IMAGE_BASE_URL + img,
        }))
      );
    }
  }, [sliderData]);

  const openLightBox = () => {
    const index =
      parseInt(
        document
          .querySelector(".product-main-image-figure")
          .getAttribute("index")
      ) || 0;
    setIsOpen(true);
    setPhotoIndex(index);
  };

  function changeBgImage(e, image, index) {
    let imgs = document.querySelectorAll(".product-main-image-figure img");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].src = image;
    }

    document
      .querySelector(".product-image-gallery .active")
      .classList.remove("active");

    document
      .querySelector(".product-main-image-figure")
      .setAttribute("index", index);
    e.currentTarget.classList.add("active");
  }

  if (!sliderData) {
    return <div></div>;
  }

  return (
    <div className="product-slider-wrape">
      <>
        <div className="product-gallery product-gallery-vertical">
          <div className="row m-0">
            <figure className="product-main-image-figure" index="0">
              <img
                src={process.env.REACT_APP_IMAGE_BASE_URL + sliderData[0]}
                alt="productImg"
                className="product_image"
              />

              <button className="btn-product-gallery" onClick={openLightBox}>
                <FaExpandArrowsAlt className="icon-arrows" />
              </button>
            </figure>

            <div className="product-image-gallery">
              {sliderData &&
                sliderData?.slice(0, 4)?.map((item, index) => (
                  <button
                    className={`product-gallery-item ${
                      0 === index ? "active" : ""
                    }`}
                    key={index}
                    onClick={(e) =>
                      changeBgImage(
                        e,
                        `${process.env.REACT_APP_IMAGE_BASE_URL + item}`,
                        index
                      )
                    }
                  >
                    <div className="img-wrapper h-100">
                      <img
                        src={
                          process.env.REACT_APP_IMAGE_BASE_URL +
                          sliderData[index]
                        }
                        alt="product back"
                      />
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={lightboxSlides}
          index={photoIndex}
          onIndexChange={setPhotoIndex}
        />
      </>
    </div>
  );
};

export default ProductSlider;
