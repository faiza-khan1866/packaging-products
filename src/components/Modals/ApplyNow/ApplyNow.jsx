import React, { useState } from "react";
import { Button, Col, Modal, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { createGetInTouchData } from "../../../http/apiService";
import { MdClose } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./ApplyNow.scss";

const initailObject = {
  name: "",
  email: "",
  mobile: "",
  subject: "",
  message: "",
};

const ApplyNow = (props) => {
  const [formValues, setFormValues] = useState(initailObject);
  const [mobileValue, setMobileValue] = useState("");
  const [loading, setLoading] = useState(false);

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

  const fetchGetInTouchFormData = async (updatedData) => {
    try {
      const response = await createGetInTouchData(updatedData);
      if (response.status === 200 || response.status === 201) {
        setLoading(false);
        Swal.fire({
          icon: "success",
          text: "Data has been Submitted Successfully!",
          confirmButtonColor: "#5bb81c",
        });
        setFormValues({ ...initailObject });
        setMobileValue("");
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
    } else if (formValues.subject === "") {
      Swal.fire({ icon: "info", text: "Please Enter Subject." });
      return;
    } else if (formValues.message === "") {
      Swal.fire({ icon: "info", text: "Please Enter Message." });
      return;
    }

    let updatedData = {
      ...formValues,
      mobile: mobileValue,
    };
    setLoading(true);
    fetchGetInTouchFormData(updatedData);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="apply-now"
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
          <Form className="query-form-column">
            <h2>Get In Touch</h2>
            <Row>
              <Col sm={12} lg={6}>
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
              <Col sm={12} lg={6}>
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
              <Col sm={12} lg={6}>
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
              <Col sm={12} lg={6}>
                <Form.Group controlId="subject" className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formValues.subject}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col sm={12}>
                <Form.Group controlId="message" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formValues.message}
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

export default ApplyNow;
