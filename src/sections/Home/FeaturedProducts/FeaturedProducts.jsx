import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Button, Col, Container, Row } from "react-bootstrap";
import product from "./../../../assets/images/home/product.webp";
import product2 from "./../../../assets/images/home/product2.webp";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ featuredData, isLoading }) => {
  const naviagte = useNavigate();
  return (
    <div className="mb-60 feature-products-wrape ptb-60">
      <Container>
        <div className="title-wrape" data-aos="fade-down" data-aos-once="true">
          <h2>Our Products</h2>
          <Button
            data-aos="fade-up"
            data-aos-once="true"
            className="view-more-btn"
            onClick={() => naviagte(`/product/${featuredData?.[0]?.route}`)}
          >
            View More
          </Button>
        </div>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <div
              className="feature-products"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <div className="image-box">
                {isLoading ? (
                  <Skeleton height={678} />
                ) : (
                  <figure style={{ height: "684px" }}>
                    <img
                      src={
                        featuredData?.[0]?.featured_img
                          ? process.env.REACT_APP_IMAGE_BASE_URL +
                            featuredData?.[0]?.featured_img
                          : product
                      }
                      alt="thumbnail"
                    />
                  </figure>
                )}
              </div>
              <h2>{isLoading ? <Skeleton /> : featuredData?.[0]?.name}</h2>
              {isLoading ? (
                <Skeleton height={40} width={"30%"} />
              ) : (
                <Button
                  className="view-more-btn"
                  onClick={() =>
                    naviagte(`/product/${featuredData?.[0]?.route}`)
                  }
                >
                  View More
                </Button>
              )}
            </div>
          </Col>
          <Col sm>
            {isLoading ? (
              <Row>
                {Array(4)
                  .fill()
                  ?.map((x, i) => (
                    <Col sm={6} key={i}>
                      <div
                        className="feature-products"
                        data-aos="zoom-in"
                        data-aos-once="true"
                      >
                        <div className="image-box">
                          <Skeleton height={271} />
                        </div>
                        <h2>
                          <Skeleton />
                        </h2>
                        <Skeleton height={40} width={"30%"} />
                      </div>
                    </Col>
                  ))}
              </Row>
            ) : (
              <Row>
                {featuredData?.slice(1, 5)?.map((x, i) => (
                  <Col sm={6} key={i}>
                    <div
                      className="feature-products"
                      data-aos="zoom-in"
                      data-aos-once="true"
                    >
                      <div className="image-box">
                        <figure>
                          <img
                            src={
                              x?.featured_img
                                ? process.env.REACT_APP_IMAGE_BASE_URL +
                                  x?.featured_img
                                : product2
                            }
                            alt="icon"
                          />
                        </figure>
                      </div>
                      <h2>{x?.name}</h2>
                      <Button
                        className="view-more-btn"
                        onClick={() => naviagte(`/product/${x?.route}`)}
                      >
                        View More
                      </Button>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default memo(FeaturedProducts);
