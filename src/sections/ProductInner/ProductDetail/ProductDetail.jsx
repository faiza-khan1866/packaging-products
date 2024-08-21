import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import ProductSlider from "../ProductSlider";
import ProductInfoTabs from "../ProductInfoTabs";
import useCart from "../../../hook/useCart";
import "./ProductDetail.scss";

const ProductDetail = ({ handleCopy, prodRoute, productData }) => {
  const { addToCart } = useCart();

  const [variationsData, setVariationsData] = useState([]);
  const [activeVariation, setActiveVariation] = useState({});

  useEffect(() => {
    if (productData?.product_variations) {
      setActiveVariation(productData?.product_variations[0]);
      setVariationsData(productData?.product_variations);
    }
  }, [productData]);

  const handleVariationChange = (e) => {
    let value = e.target.value;
    let selectedVariatuion = productData?.product_variations?.find(
      (x) => x?.id == value
    );
    setActiveVariation(selectedVariatuion);
  };
  // quantity code
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decrementQuantity = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };
  const stockStatus =
    activeVariation?.inStock === "0" ? "Out of Stock" : "In Stock";
  return (
    <>
      <Container>
        <div className="product-detail-wrape mb-60">
          <Row>
            <Col sm={12} lg={5}>
              <ProductSlider sliderData={activeVariation?.slider_images} />
            </Col>
            <Col sm>
              <div
                className="detail-wrape"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <h2>{productData?.name}</h2>
                <p className="description">{productData?.sub_title}</p>
                <p className="product-code">
                  Product Code : {activeVariation?.code}
                </p>
                <p className="availabilty">
                  Availability :{" "}
                  <span
                    className={
                      activeVariation?.inStock === "0"
                        ? "out_stock"
                        : "in_stock"
                    }
                  >
                    {stockStatus}
                  </span>
                </p>
                {/* <p className="price">AED {activeVariation?.price}</p> */}
                {productData?.total_review && (
                  <p className="rating">
                    <ReactStars
                      count={5}
                      edit={false}
                      size={24}
                      isHalf={true}
                      value={productData?.total_review}
                      emptyIcon={<AiFillStar />}
                      halfIcon={<AiOutlineStar />}
                      fullIcon={<AiFillStar />}
                      activeColor="#F8B101"
                      color="#e4e2e2"
                    />
                    <p>({productData?.review_count} customer review)</p>
                  </p>
                )}
              </div>
              <div
                className="variations-wrape"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <Form>
                  <Row>
                    <Col sm={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Variations</Form.Label>
                        <Form.Select onChange={(e) => handleVariationChange(e)}>
                          <option value="" disabled>
                            Choose an option
                          </option>
                          {variationsData?.map((x, i) => (
                            <option
                              key={i}
                              value={x?.id}
                              selected={i == 0 ? "selected" : ""}
                            >
                              {x?.name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    {activeVariation?.variation_pivot?.map((x, i) => (
                      <Col sm={6} lg={4} key={i}>
                        <Form.Group controlId="variation" className="mb-3">
                          <Form.Label>{x?.variation_name?.name}</Form.Label>
                          <Form.Control
                            type="text"
                            name="variation"
                            value={x?.variation_values?.name}
                            readOnly
                          />
                        </Form.Group>
                      </Col>
                    ))}

                    <Col sm={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Quantity</Form.Label>
                        <div className="quantity-wrape">
                          <Button
                            className="dec-btn"
                            onClick={decrementQuantity}
                          >
                            <BiMinus fontSize="20px" />
                          </Button>
                          <span className="quantity">{quantity}</span>
                          <Button
                            className="inc-btn"
                            onClick={incrementQuantity}
                          >
                            <BsPlus fontSize="20px" />
                          </Button>
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
                <Button
                  className="quote-btn"
                  onClick={() => {
                    addToCart(productData, activeVariation?.id, quantity);
                  }}
                >
                  Add To Quote
                </Button>
              </div>
              <div
                className="share-section"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <span> Share :</span>
                <div className="icons">
                  <FacebookShareButton
                    url={prodRoute}
                    quote={productData?.name}
                    hashtag="#KuwaitPack"
                  >
                    <FacebookIcon size={25} round={true} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={prodRoute}
                    title={productData?.name}
                    hashtags={["KuwaitPack", "Product"]}
                  >
                    <TwitterIcon size={25} round={true} />
                  </TwitterShareButton>
                  <LinkedinShareButton
                    url={prodRoute}
                    title={productData?.name}
                  >
                    <LinkedinIcon size={25} round={true} />
                  </LinkedinShareButton>
                  <WhatsappShareButton
                    url={prodRoute}
                    title={productData?.name}
                  >
                    <WhatsappIcon size={25} round={true} />
                  </WhatsappShareButton>
                  <span className="copy_icon">
                    <MdContentCopy fontSize="16px" onClick={handleCopy} />
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <ProductInfoTabs
        prodDescription={productData?.description}
        activeVariationData={activeVariation}
        productId={productData?.id}
        reviews={productData?.review}
      />
    </>
  );
};

export default ProductDetail;
