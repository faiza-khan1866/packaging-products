import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { AiOutlineHome } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { MdOutlineDownloadForOffline, MdOutlinePhone } from "react-icons/md";
import ApplyNow from "../Modals/ApplyNow/ApplyNow";
import "./BottomTabNavigator.scss";

function BottomTabNavigator() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="bottom-navigator-wrapper">
      <Navbar fixed="bottom" className="justify-content-around">
        <Nav>
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              <AiOutlineHome className="tab-icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="tel:09876543456">
              <MdOutlinePhone className="tab-icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://k-pack.prismcloudhosting.com/KPAK-CT.pdf"
              target="_blank"
            >
              <MdOutlineDownloadForOffline className="tab-icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as="span" onClick={() => setModalShow(true)}>
              <IoPaperPlaneOutline className="tab-icon" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <ApplyNow show={modalShow} onHide={() => setModalShow(false)} type="ug" />
    </div>
  );
}

export default BottomTabNavigator;
