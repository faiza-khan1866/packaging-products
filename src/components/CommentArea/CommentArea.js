import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { createBlogCommentsData } from "../../http/apiService";
import Swal from "sweetalert2";
import "./CommentArea.scss";

const CommentArea = ({ blogId }) => {
  const initailObject = {
    first_name: "",
    email: "",
    blog_id: null,
    comment: "",
  };

  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const fetchCommentsFormData = async (updatedData) => {
    try {
      const response = await createBlogCommentsData(updatedData);
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

    if (formValues?.first_name === "") {
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
    } else if (formValues?.comment === "") {
      Swal.fire({ icon: "info", text: "Please Enter Comment." });
      return;
    }

    let updatedData = { ...formValues, blog_id: blogId };
    setLoading(true);
    fetchCommentsFormData(updatedData);
  };
  return (
    <div className="comments_wraper">
      <h2 className="comment_title">POST A COMMENT</h2>
      <Form className="comment_form" data-aos="fade-up" data-aos-once="true">
        <Row>
          <Col sm={6}>
            <Form.Group controlId="first_name" className="mb-4">
              <Form.Control
                type="text"
                name="first_name"
                value={formValues.first_name}
                onChange={handleInputChange}
                placeholder="Full Name"
              />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group controlId="email" className="mb-4">
              <Form.Control
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder="Email Address"
              />
            </Form.Group>
          </Col>
          <Col sm={12}>
            <Form.Group controlId="comment" className="mb-4">
              <Form.Control
                as="textarea"
                name="comment"
                value={formValues.comment}
                onChange={handleInputChange}
                rows={12}
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
          <Button className="btn_submit" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </Form>
    </div>
  );
};

export default CommentArea;
