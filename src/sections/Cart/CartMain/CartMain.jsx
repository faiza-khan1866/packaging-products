import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import { RxCrossCircled } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import emptyCart from "../../../assets/images/products/empty_cart.png";
import AddQuote from "../AddQuote";
import useCart from "../../../hook/useCart";
import "./CartMain.scss";

const CartMain = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const { getCartItems, removeFromCart, UpdateCart, ClearCart } = useCart();

  // quantity code

  const incrementQuantity = (ProductId, Variationid, qty) => {
    let quantity = qty + 1;
    UpdateCart(ProductId, Variationid, quantity);
    return quantity;
  };
  const decrementQuantity = (ProductId, Variationid, qty) => {
    if (qty <= 1) {
      return qty;
    }
    let quantity = qty - 1;
    UpdateCart(ProductId, Variationid, quantity);
  };
  const cartData = getCartItems();
  return (
    <div className="cart_wrapper pb-60">
      <Container>
        <h2 className="title" data-aos="fade-down" data-aos-once="true">
          Shopping Cart
        </h2>
        {cartData?.length > 0 ? (
          <>
            <div
              className="variations-wrape py-4"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <Row className="align-items-center main_title_wrape row_style">
                <Col sm={12} md={7} lg={6} className="main_title">
                  Products
                </Col>
                <Col sm={12} md={2} lg={2} className="main_title">
                  Quantity
                </Col>
                <Col sm={12} md={3} lg={4} className="main_title">
                  Variations
                </Col>
              </Row>

              {cartData?.map((x, index) => (
                <Row key={index} className="align-items-center gy-3 row_style">
                  <Col sm={12} md={7} lg={6}>
                    <Row className="align-items-center gy-3">
                      <Col sm={12} md={2} lg={2} className="del_icon_mbl_view">
                        <RxCrossCircled
                          fontSize={"24px"}
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            removeFromCart(
                              x?.id,
                              x?.Product_selected_Variation?.id
                            )
                          }
                        />
                      </Col>
                      <Col sm={12} md={4} lg={4}>
                        <img
                          src={`${process.env.REACT_APP_IMAGE_BASE_URL}${x?.Product_selected_Variation?.slider_images?.[0]}`}
                          alt="product thumnail"
                          onClick={() =>
                            navigate(
                              `/product/${x?.category?.route}/${x?.route}`
                            )
                          }
                        />
                      </Col>
                      <Col sm={12} md={6} lg={6}>
                        <span className="subcat"> {x?.sub_category?.name}</span>
                        <h3 className="productname">{x?.name}</h3>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={12} md={2} lg={2}>
                    <div className="quantity-wrape">
                      <BiMinus
                        fontSize="20px"
                        onClick={() =>
                          decrementQuantity(
                            x?.id,
                            x?.Product_selected_Variation?.id,
                            x?.Quantity
                          )
                        }
                        className="inc-btn"
                      />
                      <span className="quantity">{x?.Quantity}</span>
                      <BsPlus
                        fontSize="20px"
                        onClick={() =>
                          incrementQuantity(
                            x?.id,
                            x?.Product_selected_Variation?.id,
                            x?.Quantity
                          )
                        }
                        className="inc-btn"
                      />
                    </div>
                  </Col>
                  <Col sm={12} md={3} lg={4}>
                    {x?.Product_selected_Variation?.variation_pivot?.map(
                      (item, i) => (
                        <p className="vari_values" key={i}>
                          <span>{item?.variation_name?.name} : </span>
                          {item?.variation_values?.name}
                        </p>
                      )
                    )}
                  </Col>
                </Row>
              ))}
            </div>
            <div className="btn_wraper">
              <Button className="btn_quote" onClick={() => setModalShow(true)}>
                Request Quote
              </Button>
              <Button className="btn_clear" onClick={() => ClearCart()}>
                <RiDeleteBin6Line className="text-danger" /> Clear All
              </Button>
            </div>
            <AddQuote show={modalShow} onHide={() => setModalShow(false)} />
          </>
        ) : (
          <div
            className="empty_cart_wrape pt-4"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <img src={emptyCart} alt="Empty Cart" className="img-fluid" />
            <p>No Product In Cart!</p>
            <Button
              className="continue_shopping_btn"
              onClick={() => navigate("/product/foam-range")}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CartMain;
