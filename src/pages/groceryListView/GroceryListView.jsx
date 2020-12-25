import React, { useState } from "react";
import PropTypes from "prop-types";
import GroceryListHeader from "./components/groceryListHeader/GroceryListHeader.jsx";
import GroceryAllProducts from "./components/groceryAllProducts/GroceryAllProducts.jsx";
import Loading from "../../basic/components/Loading.jsx";
import Footer from "../../basic/components/Footer.jsx";

const GroceryListView = ({ data, loading, error  }) => {
  let [taskModal, setTaskModal] = useState(false);
  const requestedData = data ? data : [];

  const modalChange = () => {
    setTaskModal(!taskModal);
  };
  return (
    <React.Fragment>
      <div className="grocery-list-view">
        <GroceryListHeader />
        {loading && !error && (
          <GroceryAllProducts data={requestedData} />
        )}
        {!loading && <Loading />}
      </div>
      <Footer />
    </React.Fragment>
  );
};

GroceryListView.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

GroceryListView.defaultProps = {
  data: [],
  loading: false,
  error: false,
};

export default GroceryListView;
