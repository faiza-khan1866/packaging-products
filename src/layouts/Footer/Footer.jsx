import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo1 from "./../../assets/images/logo/footerlogo1.webp";
import logo2 from "./../../assets/images/logo/footerlogo2.webp";
import logo3 from "./../../assets/images/logo/footerlogo3.webp";
import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import FooterBottom from "../FooterBottom";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm>
              <div className="layout-footer">
                <div className="img_wrpae">
                  <figure>
                    <img src={logo1} alt="K-PAK Logo" className="footer-logo" />
                  </figure>
                  <figure>
                    <img src={logo2} alt="K-PAK Logo" className="footer-logo" />
                  </figure>
                  <figure>
                    <img src={logo3} alt="K-PAK Logo" className="footer-logo" />
                  </figure>
                </div>

                {/* <p>
                  It has subsidiaries in the Kingdom of Saudi Arabia, Saudi Foam
                  Trays Manufacturing Co. also known as S-PAK (Dammam and
                  Jeddah), and one more operation in Ras Al Khaimah, U-PAK FZC,
                  UAE.
                </p> */}
                <div className="footer-social-icons">
                  <div
                    className="icon-wrap-round"
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/kpakmfgcoksc",
                        "_blank"
                      )
                    }
                  >
                    <FaFacebookF className="social-icon" />
                  </div>
                  <div
                    className="icon-wrap-round"
                    onClick={() =>
                      window.open("https://twitter.com/kuwaitpack", "_blank")
                    }
                  >
                    <FaTwitter className="social-icon" />
                  </div>
                  <div
                    className="icon-wrap-round"
                    onClick={() =>
                      window.open("https://www.linkedin.com", "_blank")
                    }
                  >
                    <FaLinkedinIn className="social-icon" />
                  </div>
                  <div
                    className="icon-wrap-round"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/kwtpak/?fbclid=IwAR05xGYfmd5Wq4PiuQaLesCEwhQhQEj2uUkBRYjx-QzKBSIAbbTGcMOKQzE",
                        "_blank"
                      )
                    }
                  >
                    <FaInstagram className="social-icon" />
                  </div>

                  <div className="whatsapp_wrape">
                    <div
                      className="icon-wrap-round"
                      onMouseEnter={handleMouseEnter}
                      // onMouseLeave={handleMouseLeave}
                    >
                      <FaWhatsapp className="social-icon" />
                    </div>
                    {showPopup && (
                      <div
                        className="popup"
                        data-aos="fade-up"
                        onMouseLeave={handleMouseLeave}
                      >
                        <ul>
                          <li
                            onClick={() =>
                              window.open(
                                "https://wa.me/+96560673659",
                                "_blank"
                              )
                            }
                          >
                            K-Pak
                          </li>
                          <li
                            onClick={() =>
                              window.open(
                                "https://wa.me/+966593433612",
                                "_blank"
                              )
                            }
                          >
                            S-Pak
                          </li>
                          <li
                            onClick={() =>
                              window.open(
                                "https://wa.me/+971501152662",
                                "_blank"
                              )
                            }
                          >
                            U-Pak
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Col>
            <Col sm>
              <div className="footer-links">
                <h2>Quick Links</h2>
                <ul>
                  <li>
                    <Link
                      to="https://k-pack.prismcloudhosting.com/KPAK-CT.pdf"
                      target="_blank"
                    >
                      Product Catalogue
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/product/foam-range">Foam Range</Link>
                  </li>
                  <li>
                    <Link to="/product/pet-range">PET Range</Link>
                  </li> */}
                  {/* <li>
                    <Link to="/sustainability">
                      Sustainable Packing Solutions
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  {/* <li>
                    <Link to="/faq">FAQ</Link>
                  </li> */}
                </ul>
              </div>
            </Col>
            <Col sm>
              <div className="footer-links">
                <h2>Useful Links</h2>
                <ul>
                  {/* <li>
                    <Link to="/blog">Media And News</Link>
                  </li> */}
                  {/* <li>
                    <Link to="/events">events</Link>
                  </li> */}
                  {/* <li>
                    <Link to="/career">Careers</Link>
                  </li> */}
                  <li>
                    <Link to="/factories">Factories</Link>
                  </li>
                  <li>
                    <RouterLink to="/certificates">Certificates</RouterLink>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="head_quat_wrape">
            <Col sm={12}>
              <div className="footer-links">
                <h2>Head Quarters</h2>
              </div>
            </Col>
            <Col sm>
              <div className="footer-links">
                <h2>K-PAK – KUWAIT</h2>
                <p>
                  International Sales - Ms. Simran Kapoor
                  <br />
                  Tel: <a href="tel:+96524721124">+965 24721124 Ext - 114</a>
                  <br />
                  Mob:{" "}
                  <a href="https://wa.me/+96560673659" target="_blank">
                    +965 60673659
                  </a>{" "}
                  /{" "}
                  <a href="https://wa.me/+96597682561" target="_blank">
                    +965 97682561
                  </a>
                  <br />
                  E-mail:{" "}
                  <a href="mailto:simran@kuwaitpack.com">
                    simran@kuwaitpack.com
                  </a>
                </p>
                <p>
                  Kuwait & Iraq Sales - Mr. Shaikh Mohammad Ghouse
                  <br />
                  Tel: <a href="tel:+24721124118">+24721124 Ext 118</a>
                  <br />
                  Mob:{" "}
                  <a href="https://wa.me/+96566922889" target="_blank">
                    +965 66922889
                  </a>
                  <br />
                  E-mail:{" "}
                  <a href="mailto:mohammed@kuwaitpack.com">
                    mohammed@kuwaitpack.com
                  </a>
                </p>
              </div>
            </Col>
            <Col sm>
              <div className="footer-links">
                <h2>S-PAK - KSA</h2>
                <p>
                  Mr. Ikramullah Abid
                  <br />
                  Tel: <a href="tel:+966138122080">+966 13 8122080/1/2</a>
                  <br />
                  Mob:{" "}
                  <a href="https://wa.me/+966593433612" target="_blank">
                    +966 59 3433612
                  </a>
                  <br />
                  E-mail:{" "}
                  <a href="mailto:ikram@kuwaitpack.com">ikram@kuwaitpack.com</a>
                </p>
                <p>
                  Mr. Mohammed Sayeed
                  <br />
                  Mob:{" "}
                  <a href="https://wa.me/+966593433612" target="_blank">
                    +966 59 3433612
                  </a>
                  <br />
                  Dammam’s Tel:{" "}
                  <a href="tel:+966138122080">+966 13 8122080/1/2</a>
                  <br />
                  Jeddah’s Tel:{" "}
                  <a href="tel:+966126082077">+966 12 6082077/88</a>
                  <br />
                  Riyadh’s Tel: <a href="tel:+966114916366">+966 11 4916366</a>
                  <br />
                  E-mail:{" "}
                  <a href="mailto:spaksales2@kuwaitpack.com">
                    spaksales2@kuwaitpack.com
                  </a>
                </p>
              </div>
            </Col>
            <Col sm>
              <div className="footer-links">
                <h2>U-PAK Industries - UAE</h2>
                <p>
                  Mr. Hamid Anwar
                  <br />
                  Tel: <a href="tel:+97172447950">+971 7 244 7950</a>
                  <br />
                  Mob:{" "}
                  <a href="https://wa.me/+971501152662" target="_blank">
                    +971 50 115 2662
                  </a>
                  <br />
                  E-mail:{" "}
                  <a href="mailto:hamid@kuwaitpack.com">hamid@kuwaitpack.com</a>
                </p>
              </div>
              <div className="footer-links">
                <h2 className="pb-0">
                  K-Concept Packaging Materials Trading LLC
                </h2>
                <p>
                  Mr. Mohamed Guesmi
                  <br />
                  Tel: <a href="tel:+97165675485">+971 6 567 5485</a>
                  <br />
                  Mob:{" "}
                  <a href="https://wa.me/+971545767665" target="_blank">
                    +971 54 5767665
                  </a>
                  <br />
                  E-mail:{" "}
                  <a href="mailto:trading@kuwaitpack.com">
                    trading@kuwaitpack.com
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <FooterBottom />
    </>
  );
};

export default Footer;
