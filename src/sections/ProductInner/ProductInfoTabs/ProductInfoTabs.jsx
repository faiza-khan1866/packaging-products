import React, { useState } from "react";
import { Tab, Tabs, Container, Row, Col, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import ReactStars from "react-rating-stars-component";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { createProductReviewData } from "../../../http/apiService";
import "./ProductInfoTabs.scss";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className="nextArrow_wrape" onClick={onClick}>
      <HiOutlineArrowSmRight fontSize={"24px"} />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="prevArrow_wrape" onClick={onClick}>
      <HiOutlineArrowSmLeft fontSize={"24px"} />
    </button>
  );
}

var settings = {
  dots: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  lazyLoad: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

const ProductInfoTabs = ({
  prodDescription,
  activeVariationData,
  productId,
  reviews,
}) => {
  const initailObject = {
    name: "",
    email: "",
    rating: 4,
    product_id: null,
    message: "",
  };

  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);
  const [newRating, setNewRating] = useState(4);

  const ratingChanged = (newRating) => {
    setNewRating(newRating);
  };
  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const fetchProductReviewFormData = async (updatedData) => {
    try {
      const response = await createProductReviewData(updatedData);
      if (response.status === 200 || response.status === 201) {
        setLoading(false);
        Swal.fire({
          icon: "success",
          text: "Data has been Submitted Successfully!",
          confirmButtonColor: "#5bb81c",
        });
        setFormValues({ ...initailObject });
      }
    } catch (error) {
      console.error("Error fetching Data:", error);
      setLoading(false);
      Swal.fire({
        icon: "warning",
        text: "Something Went Wronge!",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues?.name === "") {
      Swal.fire({ icon: "info", text: "Please Enter Name." });
      return;
    }
    if (formValues?.email === "") {
      Swal.fire({ icon: "info", text: "Please Enter Email." });
      return false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues?.email)
    ) {
      Swal.fire({ icon: "info", text: "Invalid email address." });
      return;
    } else if (formValues?.message === "") {
      Swal.fire({ icon: "info", text: "Please Enter Review." });
      return;
    }

    let updatedData = {
      ...formValues,
      product_id: productId,
      rating: newRating,
    };
    setLoading(true);
    fetchProductReviewFormData(updatedData);
  };

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div
      className="product-info-tabs-wrape mb-60"
      data-aos="fade-down"
      data-aos-once="true"
    >
      <Container>
        <Tabs
          defaultActiveKey="additional-info"
          id="product-info-tabs"
          className="mb-4"
          justify
        >
          <Tab eventKey="additional-info" title="Additional Information">
            <Row className="mb-2">
              <Col sm={4} lg={2} className="title">
                Product Code :
              </Col>
              <Col sm className="subtitle">
                {activeVariationData?.code}
              </Col>
            </Row>

            <Row className="mb-2">
              <Col sm={4} lg={2} className="title">
                Product SKU :
              </Col>
              <Col sm className="subtitle">
                {activeVariationData?.sku}
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={4} lg={2} className="title">
                Description :
              </Col>
              <Col sm className="subtitle">
                <p
                  dangerouslySetInnerHTML={{
                    __html: activeVariationData?.description,
                  }}
                />
              </Col>
            </Row>
            {activeVariationData?.variation_pivot?.map((x, i) => (
              <Row className="mb-2" key={i}>
                <Col sm={4} lg={2} className="title">
                  {x?.variation_name?.name} :
                </Col>
                <Col sm className="subtitle">
                  {x?.variation_values?.name}
                </Col>
              </Row>
            ))}
          </Tab>
          <Tab eventKey="description" title="Description">
            <p dangerouslySetInnerHTML={{ __html: prodDescription }} />
          </Tab>
          <Tab eventKey="reviews" title={`Reviews (${reviews?.length})`}>
            <div className="review_wraper">
              <h2 className="title">Leave Us Feedback</h2>
              <p className="rating">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  value={newRating}
                  emptyIcon={<AiFillStar />}
                  halfIcon={<AiOutlineStar />}
                  fullIcon={<AiFillStar />}
                  activeColor="#F8B101"
                  color="#e4e2e2"
                />
              </p>
              <Form className="review_form">
                <Row>
                  <Col sm={12} lg={6}>
                    <Form.Group controlId="name" className="mb-4">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={12} lg={6}>
                    <Form.Group controlId="email" className="mb-4">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={12}>
                    <Form.Group controlId="message" className="mb-4">
                      <Form.Label>Review</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formValues.message}
                        onChange={handleInputChange}
                        rows={5}
                        style={{ resize: "none" }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                {loading ? (
                  <div
                    className="loader"
                    style={{
                      borderTopColor: "#E3F5E5",
                      borderRightColor: "#E3F5E5",
                      borderBottomColor: "#E3F5E5",
                      borderLeftColor: "#5bb81c",
                      width: "sm" ? "7em" : "md" ? "10em" : "10em",
                      height: "sm" ? "7em" : "md" ? "10em" : "10em",
                    }}
                  />
                ) : (
                  <Button className="btn-submit" onClick={handleSubmit}>
                    Post review
                  </Button>
                )}
              </Form>
            </div>
            {reviews?.length > 0 && (
              <div className="single_review_wraper">
                <h2 className="title">Reviews</h2>
                <Slider {...settings}>
                  {reviews?.map((x, i) => (
                    <div className="item" key={i}>
                      <div className="review_item">
                        <h2 className="name">{x?.name}</h2>
                        <p className="date">
                          {new Date(x?.created_at)?.toLocaleDateString(
                            "en-US",
                            options
                          )}
                        </p>
                        <p className="rating">
                          <ReactStars
                            count={5}
                            edit={false}
                            size={20}
                            isHalf={true}
                            value={x?.rating}
                            emptyIcon={<AiFillStar />}
                            halfIcon={<AiOutlineStar />}
                            fullIcon={<AiFillStar />}
                            activeColor="#F8B101"
                            color="#e4e2e2"
                          />
                        </p>
                        <p className="review">{x?.message}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default ProductInfoTabs;
