import React from "react";
import PropTypes from "prop-types";

const GroceryEntryView = ({ taskDetail, closeModal }) => {
  const { id, time, history, text } = taskDetail;
  return (
    <div className="grocery-entry-view">
      <button type="button" onClick={() => closeModal()}>
        Close
      </button>
      <div className="grocery-entry-data">
        {`ID: ${id}`}
        {`TIME: ${time}`}
        {`TEXT: ${text}`}
        {`HISTORY: ${JSON.stringify(history)}`}
      </div>
    </div>
  );
};

GroceryEntryView.propTypes = {
  taskDetail: PropTypes.object,
};

export default GroceryEntryView;
