import React from "react";
import { Container } from "react-bootstrap";
import "./IntroCommon.scss";

const IntroCommon = ({ introData }) => {
  return (
    <div className="intro-common-wrape mb-60">
      <Container>
        <h2 data-aos="fade-down" data-aos-once="true">
          {introData?.title}
        </h2>
        <p
          dangerouslySetInnerHTML={{ __html: introData?.description }}
          data-aos="fade-down"
          data-aos-once="true"
        />
      </Container>
    </div>
  );
};

export default IntroCommon;
