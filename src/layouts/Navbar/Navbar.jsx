import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Offcanvas, Badge } from "react-bootstrap";
import logo from "./../../assets/images/logo/logo.webp";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineDownloadForOffline, MdOutlinePhone } from "react-icons/md";
import TopHeader from "../TopHeader";
import { useCategorySubCategoryData } from "../../http/apiService";
import { QueryCache } from "react-query";
import SearchBar from "./SearchBar";
import useCart from "../../hook/useCart";
import { AiOutlineShopping } from "react-icons/ai";
import "./Navbar.scss";

const MainNavbar = () => {
  const { pathname } = useLocation();
  const [search, setSearch] = useState(false);
  const searchRef = useRef(null);
  // ********category drop down ********
  const { getLocalCart, CartLength } = useCart();
  const queryCache = new QueryCache();
  const { data: categorySubCategoryData } =
    useCategorySubCategoryData(queryCache);
  const categoryData = categorySubCategoryData?.data || [];

  useEffect(() => {
    getLocalCart();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearch(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <TopHeader />
      <div className="navbar-wrap sticky-top">
        <Navbar expand="lg">
          <Navbar.Brand as={Link} to="/">
            <figure>
              <img src={logo} alt="K-PAK Logo" />
            </figure>
          </Navbar.Brand>
          {/* ***********mobile view icon *****************/}
          <div className="d-flex">
            <Navbar className="mbl_view_serach_icons">
              <Nav className="navbar-icons">
                <Nav.Link className="searchbar-icon" ref={searchRef}>
                  <IoIosSearch
                    fontSize="24px"
                    onClick={() => setSearch(!search)}
                  />
                  {search && <SearchBar />}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/cart"
                  className={`badge_icon_wrape ${
                    pathname === "/cart" && "active"
                  }`}
                >
                  <AiOutlineShopping fontSize="24px" />
                  <Badge className="badge_wrape">{CartLength}</Badge>
                </Nav.Link>
              </Nav>
            </Navbar>
            <Navbar className="mbl_view_icons">
              <Nav className="navbar-icons">
                <Nav.Link className="searchbar-icon" ref={searchRef}>
                  <IoIosSearch
                    fontSize="24px"
                    onClick={() => setSearch(!search)}
                  />
                  {search && <SearchBar />}
                </Nav.Link>
                {/* <Nav.Link href="tel:09876543456">
                  <MdOutlinePhone fontSize="24px" />
                </Nav.Link> */}
                <Nav.Link
                  as={Link}
                  to="/cart"
                  className={`badge_icon_wrape ${
                    pathname === "/cart" && "active"
                  }`}
                >
                  <AiOutlineShopping fontSize="24px" />
                  <Badge className="badge_wrape">{CartLength}</Badge>
                </Nav.Link>
                <Nav.Link
                  href="https://k-pack.prismcloudhosting.com/KPAK-CT.pdf"
                  target="_blank"
                  // download="KPAK-CT"
                >
                  <MdOutlineDownloadForOffline fontSize="24px" />
                </Nav.Link>
              </Nav>
            </Navbar>
            {/* ***********mobile view icon *****************/}

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          </div>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                <figure className="mbl_figure">
                  <img src={logo} alt="K-PAK Logo" className="image" />
                </figure>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="mx-auto">
                {/* <Nav.Link
                  as={Link}
                  to="/"
                  className={pathname === "/" && "active"}
                >
                  Home
                </Nav.Link> */}
                <Nav.Link
                  as={Link}
                  to="/about"
                  className={pathname === "/about" && "active"}
                >
                  About Us
                </Nav.Link>
                <NavDropdown title="Product">
                  {categoryData?.map((item) => (
                    <NavDropdown.Item
                      as={Link}
                      to={`/product/${item?.route}`}
                      key={item?.id}
                      className={`cat-dropdown ${
                        pathname === `/product/${item?.route}` && "active"
                      }`}
                    >
                      {item?.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                {/* <Nav.Link
                  as={Link}
                  to="/features"
                  className={pathname === "/features" && "active"}
                >
                  Features
                </Nav.Link> */}
                <Nav.Link
                  as={Link}
                  to="/factories"
                  className={pathname === "/factories" && "active"}
                >
                  Factories
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/career"
                  className={pathname === "/career" && "active"}
                >
                  Careers
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/events"
                  className={pathname === "/events" && "active"}
                >
                  Events
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  className={pathname === "/contact" && "active"}
                >
                  Contact
                </Nav.Link>
              </Nav>
              <Nav className="navbar-icons">
                <Nav.Link className="searchbar-icon" ref={searchRef}>
                  <IoIosSearch
                    fontSize="24px"
                    onClick={() => setSearch(!search)}
                  />
                  {search && <SearchBar />}
                </Nav.Link>
                {/* <Nav.Link href="tel:09876543456">
                  <MdOutlinePhone fontSize="24px" />
                </Nav.Link> */}
                <Nav.Link
                  as={Link}
                  to="/cart"
                  className={`badge_icon_wrape ${
                    pathname === "/cart" && "active"
                  }`}
                >
                  <AiOutlineShopping fontSize="24px" />
                  <Badge className="badge_wrape">{CartLength}</Badge>
                </Nav.Link>
                <Nav.Link
                  href="https://k-pack.prismcloudhosting.com/KPAK-CT.pdf"
                  target="_blank"
                  // download="KPAK-CT"
                >
                  <MdOutlineDownloadForOffline fontSize="24px" />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </div>
    </>
  );
};
export default MainNavbar;
