import React from "react";
import Skeleton from "react-loading-skeleton";
import { Container, Row, Col } from "react-bootstrap";
import "./Quote.scss";

const Quote = ({ quoteData, isLoading }) => {
  return (
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col sm={10} md={10} lg={9}>
          <div className="quote-wrape" data-aos="zoom-in" data-aos-once="true">
            <Row className="align-items-center justify-content-center">
              <Col sm={2} className="vertline">
                <h2 className="text-center">#1</h2>
              </Col>
              <Col sm className="quotedes">
                <h2>{isLoading ? <Skeleton /> : quoteData?.title}</h2>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Quote;
