import React, { useState } from "react";
import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { createCareerFormData } from "../../http/apiService";
import careerImg from "../../assets/images/career/careerImg.webp";
import { MdOutlineFileUpload } from "react-icons/md";
import "./CareersForm.scss";

const initailObject = {
  name: "",
  email: "",
  mobile: "",
  location: "",
  resume: [],
  message: "",
};

const CareersForm = () => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  const [uploadFile, setUploadFie] = useState([]);
  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    let downloadFile = [...event.target.files];
    let updatedFiles = downloadFile.map((x) => ({
      image: x,
    }));
    setUploadFie(updatedFiles);
  };

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

  const fetchCareerGetInTouchFormData = async (imagesFormData) => {
    try {
      let header = {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${imagesFormData._boundary}`,
        },
      };
      const response = await createCareerFormData(imagesFormData, header);
      if (response.status === 200 || response.status === 201) {
        setLoading(false);
        Swal.fire({
          icon: "success",
          text: "Data has been Submitted Successfully!",
          confirmButtonColor: "#5bb81c",
        });
        setFormValues({ ...initailObject });
        setUploadFie([]);
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
      Swal.fire({ icon: "info", text: "Please Enter Full Name." });
      return;
    }
    if (formValues?.email === "") {
      Swal.fire({ icon: "info", text: "Please Enter Email Address." });
      return false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues?.email)
    ) {
      Swal.fire({ icon: "info", text: "Invalid Email Address." });
      return;
    } else if (formValues.mobile === "") {
      Swal.fire({ icon: "info", text: "Please Enter Mobile." });
      return;
    } else if (formValues.location === "") {
      Swal.fire({ icon: "info", text: "Please Select Location." });
      return;
    } else if (uploadFile.length === 0) {
      Swal.fire({ icon: "info", text: "Please Upload Resume." });
      return;
    } else if (formValues.message === "") {
      Swal.fire({ icon: "info", text: "Please Enter Message." });
      return;
    }

    let updatedData = { ...formValues };

    let imagesFormData = new FormData();

    uploadFile.forEach((x) => {
      imagesFormData.append("resume[]", x?.image);
    });

    imagesFormData.append("data", JSON.stringify(updatedData));

    setLoading(true);
    fetchCareerGetInTouchFormData(imagesFormData);
  };

  return (
    <div className="careers_forn_sec pb-60">
      <Container>
        <Row className="align-items-center gy-4">
          <Col sm={12} lg={6}>
            <Form
              className="query-form-column"
              data-aos="fade-down"
              data-aos-once="true"
            >
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
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      value={formValues.mobile}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} lg={6}>
                  <Form.Group controlId="location" className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      as="select"
                      name="location"
                      value={formValues.location}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Location</option>
                      <option value="K-PAK">Kuwait - K-PAK</option>
                      <option value="S-PAK">Saudi Arabia - S-PAK</option>
                      <option value="U-PAK">UAE - U-PAK</option>
                      <option value="K-Concept">UAE - K-Concept</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col sm={12}>
                  <Form.Group controlId="resume" className="mb-3">
                    <Form.Label>Resume</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        name="resume"
                        readOnly
                        value={
                          uploadFile?.length > 0
                            ? uploadFile?.[0]?.image?.name
                            : "Upload"
                        }
                        style={{ borderRight: "0" }}
                      />
                      <InputGroup.Text>
                        <MdOutlineFileUpload
                          fontSize="20px"
                          onClick={handleClick}
                        />
                      </InputGroup.Text>
                    </InputGroup>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      ref={hiddenFileInput}
                      onChange={handleChange}
                      style={{ display: "none" }}
                      name="property_images"
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
          </Col>
          <Col sm={12} lg={6}>
            <figure>
              <img src={careerImg} className="rounded" alt="careerImg" />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CareersForm;
