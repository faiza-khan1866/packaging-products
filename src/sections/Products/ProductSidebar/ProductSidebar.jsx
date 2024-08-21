import React, { useState, useEffect } from "react";
import { Form, InputGroup, Accordion } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./ProductSidebar.scss";

const ProductSidebar = ({
  subCategoryFilterData,
  searchBarFilterData,
  categorySubCategoryData,
}) => {
  const navigate = useNavigate();

  // serach bar code

  const [searchTerm, setSearchTerm] = useState("");

  const isFirstRun = React.useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      searchBarFilterData(searchTerm);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, searchBarFilterData]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [selectedOptionsByCategory, setSelectedOptionsByCategory] = useState(
    {}
  );

  const handleCheckboxChange = (catRoute, subCatId) => {
    setSelectedOptionsByCategory((prevSelectedOptionsByCategory) => {
      // Create a copy of the previous selected options by category state
      const newSelectedOptionsByCategory = { ...prevSelectedOptionsByCategory };

      // Get the selected options for the current category
      const selectedOptions = newSelectedOptionsByCategory[catRoute] || [];

      // Check if the value is already selected
      const isOptionSelected = selectedOptions.includes(subCatId);

      if (isOptionSelected) {
        // If it is selected, remove it from the selected options
        const updatedSelectedOptions = selectedOptions.filter(
          (option) => option !== subCatId
        );
        newSelectedOptionsByCategory[catRoute] = updatedSelectedOptions;
        subCategoryFilterData(catRoute, updatedSelectedOptions);
        navigate(`/product/${catRoute}`);
      } else {
        // If it is not selected, add it to the selected options
        const updatedSelectedOptions = [...selectedOptions, subCatId];
        newSelectedOptionsByCategory[catRoute] = updatedSelectedOptions;
        subCategoryFilterData(catRoute, updatedSelectedOptions);
        navigate(`/product/${catRoute}`);
      }

      return newSelectedOptionsByCategory;
    });
  };

  return (
    <div className="product-sidebar-wrape">
      <div className="search-wrape" data-aos="fade-down" data-aos-once="true">
        <Form.Label htmlFor="search">Search</Form.Label>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Search here.."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <InputGroup.Text id="search">
            <IoIosSearch fontSize="24px" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      {/* <div className="category-wrape" data-aos="fade-down" data-aos-once="true">
        <p>Categories</p>
      </div> */}
      <Accordion defaultActiveKey={1}>
        <Accordion.Item eventKey={1} data-aos="fade-down" data-aos-once="true">
          <Accordion.Header>{categorySubCategoryData?.name}</Accordion.Header>
          <Accordion.Body>
            <Form className="subcategory_list">
              {categorySubCategoryData?.sub_category?.map((subcategory) => (
                <Form.Check
                  key={subcategory?.id}
                  id={subcategory?.id}
                  label={subcategory?.name}
                  type="checkbox"
                  onChange={() =>
                    handleCheckboxChange(
                      categorySubCategoryData?.route,
                      subcategory?.id
                    )
                  }
                  checked={selectedOptionsByCategory[
                    categorySubCategoryData?.route
                  ]?.includes(subcategory?.id)}
                />
              ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProductSidebar;
