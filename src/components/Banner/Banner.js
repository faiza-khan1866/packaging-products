import React from "react";
import bannerBg from "../../assets/images/banner/homebanner.webp";
import "./banner.scss";

const Banner = ({ bannerTitle, bannerImg, ShowPath }) => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center common_banner"
      style={{
        backgroundImage: bannerImg ? `url(${bannerImg})` : `url(${bannerBg})`,
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center Banner_text"
        data-aos="fade-down"
        data-aos-once="true"
      >
        {ShowPath ? `Home / ${bannerTitle}` : ""}
      </div>
    </div>
  );
};

export default Banner;
