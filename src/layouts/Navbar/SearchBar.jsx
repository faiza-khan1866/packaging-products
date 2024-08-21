import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { fetchHeaderSearchData } from "../../http/apiService";
import DataLoader from "../../components/Loader/DataLoader";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [queryList, setQueryList] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const inputQuerySearch = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const getQueryData = async () => {
    try {
      setIsLoading(true); // Show the loader
      const { data } = await fetchHeaderSearchData(query);
      setQueryList(data);
    } catch (error) {
      console.error("Error fetching Data:", error);
    } finally {
      setIsLoading(false); // Hide the loader
    }
  };

  useEffect(() => {
    if (query.length > 3) {
      getQueryData();
    }
  }, [query]);

  return (
    <div className="search-content">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder={"Search ..."}
            onChange={inputQuerySearch}
            value={query}
          />
          <button type="button" className="button-search">
            <IoIosSearch fontSize="24px" />
          </button>
        </div>
        {isLoading ? (
          <DataLoader />
        ) : (
          query !== "" &&
          query?.length >= 3 && (
            <Container fluid className="mt-3 search_suggestions">
              <Row>
                <Col sm={6}>
                  <h3>Products</h3>
                  {queryList?.products?.length > 0 ? (
                    queryList?.products?.map((x, i) => (
                      <p key={i}>
                        <Link to={`/product/${x?.category?.route}/${x?.route}`}>
                          {x?.name}
                        </Link>
                      </p>
                    ))
                  ) : (
                    <p>
                      <small>No Product Found !!!</small>
                    </p>
                  )}
                </Col>
                <Col sm={6}>
                  <h3>Events</h3>
                  {queryList?.blogs?.length > 0 ? (
                    queryList?.blogs?.map((x, i) => (
                      <p key={i}>
                        <Link to={`/event/${x?.route}`}>{x?.title}</Link>
                      </p>
                    ))
                  ) : (
                    <p>
                      <small>No Event Found !!!</small>
                    </p>
                  )}
                </Col>
              </Row>
            </Container>
          )
        )}
      </form>
    </div>
  );
};

export default SearchBar;
