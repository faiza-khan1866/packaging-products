import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
// import logo from "./../../assets/images/logo/toplogo.webp";
import kuwait from "./../../assets/images/logo/kuwait.webp";
import uae from "./../../assets/images/logo/united-arab-emirates.webp";
import saudiArabia from "./../../assets/images/logo/saudi-arabia.webp";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { MapContext } from "../../context/MapContext";
import "./TopHeader.scss";

const TopHeader = () => {
  const { setMapValue } = useContext(MapContext);

  return (
    <div className="top-header-wrap">
      <Navbar expand={"lg"}>
        {/* <Navbar.Brand>
          <Link to="/">
            <img src={logo} loading="lazy" alt="K-PAK logo" />
          </Link>
        </Navbar.Brand> */}
        <Navbar className="p-0">
          <Nav className="navbar-icons">
            <Nav.Link>
              <HashLink
                smooth
                to="/#kuwait"
                onClick={() => setMapValue("kuwait")}
              >
                <figure>
                  <img src={kuwait} loading="lazy" alt="K-PAK Logo" />
                </figure>
              </HashLink>
            </Nav.Link>
            <Nav.Link>
              <HashLink
                smooth
                to="/#jeddah"
                onClick={() => setMapValue("jeddah")}
              >
                <figure>
                  <img src={saudiArabia} loading="lazy" alt="arab-logo" />
                </figure>
              </HashLink>
            </Nav.Link>
            <Nav.Link>
              <HashLink smooth to="/#uae" onClick={() => setMapValue("uae")}>
                <figure>
                  <img src={uae} loading="lazy" alt="uae-logo" />
                </figure>
              </HashLink>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Nav className="bettereveryday ms-auto">
          <Nav.Link>Better Everyday...</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default TopHeader;
