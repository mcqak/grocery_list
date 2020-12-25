import React from "react";
import PropTypes from 'prop-types';
import GroceryProductWrap from "./components/GroceryProductWrap.js";

const GroceryAllProducts = ({ data  }) => {
  return (
    <div className="grocery-all-products">
      {data &&
        data.map((product) => (
          <GroceryProductWrap product={product} key={product.id}  />
        ))}
    </div>
  );
};

GroceryAllProducts.propTypes = {
  data: PropTypes.array,
};

export default GroceryAllProducts;
