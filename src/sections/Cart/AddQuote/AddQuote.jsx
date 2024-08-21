import React, { useMemo, useState } from "react";
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import Swal from "sweetalert2";
import { createProductQuoteData } from "../../../http/apiService";
import useCart from "../../../hook/useCart";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./AddQuote.scss";

const initailObject = {
  product: [],
  name: "",
  email: "",
  mobile: "",
  address: "",
  city: "",
  country: "",
  description: "",
};

const AddQuote = (props) => {
  const [mobileValue, setMobileValue] = useState("");
  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);
  const { getCartItems, ClearCart } = useCart();
  let cartData = useMemo(() => getCartItems(), [getCartItems()]);

  const handleInputChange = (e) => {
    if (e.target.name == "mobile") {
      // Regular expression to match only numbers
      const numberPattern = /^\d*$/;
      if (numberPattern.test(e.target.value)) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      }
    } else {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  const fetchProductQuoteFormData = async (updatedData) => {
    try {
      const response = await createProductQuoteData(updatedData);
      if (response.status === 200 || response.status === 201) {
        setLoading(false);
        Swal.fire({
          icon: "success",
          text: "Quotation has been Submitted Successfully!",
          confirmButtonColor: "#5bb81c",
        });
        ClearCart();
        setFormValues({ ...initailObject });
        setMobileValue("");
        props?.onHide(true);
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
    if (formValues.name === "") {
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
    } else if (mobileValue === "") {
      Swal.fire({ icon: "info", text: "Please Enter Phone Number." });
      return;
    } else if (formValues.address === "") {
      Swal.fire({ icon: "info", text: "Please Enter Address." });
      return;
    } else if (formValues.country === "") {
      Swal.fire({ icon: "info", text: "Please Enter Country." });
      return;
    } else if (formValues.city === "") {
      Swal.fire({ icon: "info", text: "Please Enter City." });
      return;
    } else if (formValues.description === "") {
      Swal.fire({ icon: "info", text: "Please Enter Message." });
      return;
    }
    let ProductData = cartData?.map((item) => {
      return {
        product_id: item?.id,
        product_variation_id: item?.Product_selected_Variation.id,
        // variation_value_id: item?.Product_selected_Variation.id,
        qty: item?.Quantity,
      };
    });
    let updatedData = {
      ...formValues,
      // mobile: selectedCountry + formValues.mobile,
      mobile: mobileValue,
      product: ProductData,
    };
    setLoading(true);
    fetchProductQuoteFormData(updatedData);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="add_quote_wrape"
      backdrop="static"
    >
      <Modal.Body>
        <p className="text-end p-1 m-0">
          <MdClose
            fontSize="24px"
            className="closeIcon"
            onClick={props?.onHide}
          />
        </p>
        <Container>
          <Form className="quote_form">
            <h2>Get In Touch</h2>
            <Row>
              <Col sm={6}>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="mobile" className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <PhoneInput
                    country="ae"
                    value={mobileValue}
                    onChange={setMobileValue}
                    enableSearch={true}
                    disableSearchIcon={true}
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="address" className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formValues.address}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="country" className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    value={formValues.country}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="city" className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formValues.city}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col sm={12}>
                <Form.Group controlId="message" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={formValues.description}
                    onChange={handleInputChange}
                    rows={3}
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
                Submit
              </Button>
            )}
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default AddQuote;
