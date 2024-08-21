import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./ContactMap.scss";

const ContactMap = () => {
  const [key, setKey] = useState("kuwait");

  useEffect(() => {
    if (key) {
      setKey(key);
    }
  }, [key]);

  return (
    <div className="contact-map-wrape pb-60">
      <Container>
        <Row>
          <Col sm={12} lg={5}>
            <div
              className="btn-wrape"
              data-aos="fade-down"
              data-aos-once="true"
            >
              <Button
                className={`btnstyle ${key == "kuwait" && "active"}`}
                onClick={() => setKey("kuwait")}
              >
                Kuwait
              </Button>
              <Button
                className={`btnstyle ${
                  key == "jeddah" || key == "dammam" || key == "riyadh"
                    ? "active"
                    : ""
                }`}
                onClick={() => setKey("jeddah")}
              >
                Saudi
              </Button>
              <Button
                className={`btnstyle ${key == "uae" && "active"}`}
                onClick={() => setKey("uae")}
              >
                UAE
              </Button>
            </div>
            <div
              className="map-content"
              data-aos="fade-down"
              data-aos-once="true"
            >
              <p className="description">
                Whether you have a question about our products, pricing,
                international orders; we are here to help you with all inquiries
                specific to your business.
              </p>
              <h2 className="title">Lets Talk!</h2>
              <div className={key == "kuwait" ? "d-block" : "d-none"}>
                <p className="detail">
                  Kuwait Packing Materials Mfg. Co. KSC (C ) K-PAK
                </p>
                <div className="map-info1">
                  <p>International Sales - Ms. Simran Kapoor</p>
                  <p>
                    Tel: <a href="tel:+96524721124">+965 24721124 Ext - 114</a>
                  </p>
                  <p>
                    Mob:{" "}
                    <a href="https://wa.me/+96560673659" target="_blank">
                      +965 60673659
                    </a>{" "}
                    /{" "}
                    <a href="https://wa.me/+96597682561" target="_blank">
                      +965 97682561
                    </a>
                  </p>
                  <p>
                    E-mail:{" "}
                    <a href="mailto:simran@kuwaitpack.com">
                      simran@kuwaitpack.com
                    </a>
                  </p>
                </div>
                <div className="map-info2">
                  <p>Local & Iraq Sales - Mr. Shaikh Mohammad Ghouse</p>
                  <p>
                    Tel: <a href="tel:+96524721124">+965 24721124 Ext - 118</a>
                  </p>
                  <p>
                    Mob:{" "}
                    <a href="https://wa.me/+96566922889" target="_blank">
                      +965 66922889 / 99728185
                    </a>
                  </p>
                  <p>
                    E-mail:{" "}
                    <a href="mailto:mohammed@kuwaitpack.com">
                      mohammed@kuwaitpack.com
                    </a>
                  </p>
                </div>
              </div>
              <div
                className={
                  key == "jeddah" || key == "dammam" || key == "riyadh"
                    ? "d-block"
                    : "d-none"
                }
              >
                <p className="detail">Saudi Foam Trays Manufacturing Company</p>
                <div className="map-info1">
                  <p>
                    Mr. Ikramullah Abid - Deputy General Manager - Operations
                  </p>
                  <p>
                    Mob:{" "}
                    <a href="https://wa.me/+966593433612" target="_blank">
                      +966 59 3433612
                    </a>
                  </p>
                  <p>
                    E-mail:{" "}
                    <a href="mailto:ikram@kuwaitpack.com">
                      ikram@kuwaitpack.com
                    </a>
                  </p>
                </div>
                <div className="map-info1">
                  <p>
                    Dammam - Second Industrial City St. 66 | P.O Box 13684,
                    Dammam 31414, Saudi Arabia
                  </p>
                  <p>
                    Tel:{" "}
                    <a href="tel:+966138122080">
                      +966 13 8122080/1/2 – Ext: 105
                    </a>
                  </p>
                </div>
                <div className="map-info1">
                  <p>
                    Jeddah - 1st Industrial City, Phase 4 |P.O. Box 30923,
                    Jeddah 21487, Saudi Arabia
                  </p>
                  <p>
                    Tel:{" "}
                    <a href="tel:+966126082088">+966 12 6082088/77 Ext - 102</a>
                  </p>
                </div>
                <div className="map-info2">
                  <p>
                    Riyadh – East Road Exit 14 / Medad Building , Office # 108
                  </p>
                  <p>
                    Tel: <a href="tel:+966114916366">+966 11 4916366</a>
                  </p>
                </div>
              </div>
              <div className={key == "uae" ? "d-block" : "d-none"}>
                <p className="detail">
                  U-PAK INDUSTRIES | P.O. Box 31329 RAK- UAE | Al Hamra
                  Industrial Zone. RAKEZ. Al Jazeera, RAK - United Arab Emirates
                </p>
                <div className="map-info1">
                  <p>Mr. Hamid Anwar - General Manager</p>
                  <p>
                    Tel: <a href="tel:+97172447950">+971 7 244 7950/52/53</a>
                  </p>
                  <p>
                    Mob:{" "}
                    <a href="https://wa.me/+971501152662" target="_blank">
                      +971 50 115 2662
                    </a>
                  </p>
                  <p>
                    E-mail:{" "}
                    <a href="mailto:hamid@kuwaitpack.com">
                      hamid@kuwaitpack.com
                    </a>
                  </p>
                </div>
                <div className="map-info2">
                  <p>K-Concept Packaging Materials Trading LLC</p>
                  <p>Mr. Mohamed Guesmi</p>
                  {/* <p style={{ fontWeight: "400" }}>
                    <span style={{ fontWeight: "600" }}>Address</span> - Sharjah
                    Ind. Area 13, United Arab Emirates.
                  </p> */}
                  <p>
                    Tel: <a href="tel:+97165675485">+971 6 567 5485</a>
                  </p>
                  <p>
                    Mob:{" "}
                    <a href="https://wa.me/+971545767665" target="_blank">
                      +971 54 5767665
                    </a>
                  </p>
                  <p>
                    E-mail:{" "}
                    <a href="mailto:trading@kuwaitpack.com">
                      trading@kuwaitpack.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm className="map-space" data-aos="fade-up" data-aos-once="true">
            <div
              className={`tab-inner-item ${
                key == "kuwait" ? "d-block" : "d-none"
              }`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.907438839143!2d48.00772800000001!3d29.226277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60a66c1f00bd5%3A0xb2dbd13e45fa70ba!2sKuwait%20Packing%20Materials%20Manufacturing%20Company!5e0!3m2!1sen!2s!4v1683209106150!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div
              className={`tab-inner-item saudi-wrape ${
                key == "jeddah" || key == "dammam" || key == "riyadh"
                  ? "d-block"
                  : "d-none"
              }`}
            >
              <div className="saudi-dropdown">
                <Button
                  className={`inner-btn ${key == "jeddah" && "active"}`}
                  onClick={() => setKey("jeddah")}
                >
                  Jeddah
                </Button>
                <Button
                  className={`inner-btn ${key == "dammam" && "active"}`}
                  onClick={() => setKey("dammam")}
                >
                  Dammam
                </Button>
                <Button
                  className={`inner-btn ${key == "riyadh" && "active"}`}
                  onClick={() => setKey("riyadh")}
                >
                  Riyadh
                </Button>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7606831.781841663!2d33.9561958!3d21.418498900000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c9651dfcfb3f%3A0x7acebca05b7a788!2sSaudi%20Foam%20Trays%20Manufacturing%20co%20S-PAK!5e0!3m2!1sen!2s!4v1697627708623!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className={key == "jeddah" ? "d-block" : "d-none"}
              ></iframe>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7606831.781841663!2d33.9561958!3d21.418498900000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c9651dfcfb3f%3A0x7acebca05b7a788!2sSaudi%20Foam%20Trays%20Manufacturing%20co%20S-PAK!5e0!3m2!1sen!2s!4v1697627708623!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className={key == "dammam" ? "d-block" : "d-none"}
              ></iframe>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7606831.781841663!2d33.9561958!3d21.418498900000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c9651dfcfb3f%3A0x7acebca05b7a788!2sSaudi%20Foam%20Trays%20Manufacturing%20co%20S-PAK!5e0!3m2!1sen!2s!4v1697627708623!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className={key == "riyadh" ? "d-block" : "d-none"}
              ></iframe>
            </div>

            <div
              className={`tab-inner-item ${
                key == "uae" ? "d-block" : "d-none"
              }`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.618718821533!2d55.7952757!3d25.683930999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60a66b8c07611%3A0xc385ca8411daf58d!2sU-PAK%20Industries%20LLC!5e0!3m2!1sen!2s!4v1683209238869!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactMap;
