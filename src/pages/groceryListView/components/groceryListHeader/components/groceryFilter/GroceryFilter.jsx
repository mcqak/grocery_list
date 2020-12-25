import React from "react";
import PropTypes from "prop-types";

const GroceryFilter = ({ sortByAlphabet, sortByStatus, sortByDate }) => {
  return (
    <div className="grocery-filter">
      <button
        type="button"
        className="grocery-filter-sort"
        onClick={() => sortByAlphabet()}
      >
        Sort by Alphabet
      </button>
      <button
        type="button"
        className="grocery-filter-sort"
        onClick={() => sortByStatus()}
      >
        Sort by Status
      </button>
      <button
        type="button"
        className="grocery-filter-sort"
        onClick={() => sortByDate()}
      >
        Sort By Date
      </button>
    </div>
  );
};

GroceryFilter.propTypes = {
  sortByAlphabet: PropTypes.func,
  sortByStatus: PropTypes.func,
  sortByDate: PropTypes.func,
};

GroceryFilter.defaultProps = {
  sortByAlphabet: () => {},
  sortByStatus: () => {},
  sortByDate: () => {},
};

export default GroceryFilter;
