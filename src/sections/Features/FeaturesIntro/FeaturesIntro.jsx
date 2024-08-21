import React from "react";
import { Container } from "react-bootstrap";
import "./FeaturesIntro.scss";

const FeaturesIntro = ({ introData }) => {
  return (
    <div className="features-intro-wrape ptb-60">
      <Container>
        <h2 data-aos="fade-down" data-aos-once="true">
          {introData?.title}
        </h2>
        <h3 data-aos="fade-down" data-aos-once="true">
          {introData?.subtitle}
        </h3>
      </Container>
    </div>
  );
};

export default FeaturesIntro;
