import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const GroceryAdd = ({ addNew }) => {
  let [textField, setTextField] = useState(false);
  let [newText, setNewText] = useState("");

  const onSubmit = (event) => {
    if (newText.length != "") {
      addNew(newText, true);
      setNewText("");
    }
    event.preventDefault();
  };

  const onChangeTextArea = (event) => {
    const {
      target: { value: newText },
    } = event;

    setNewText(newText);
  };
  return (
    <div className="grocery-add">
      <div className="grocery-add-button-box">
        <button
          type="button"
          className="grocery-add-button"
          onClick={() => setTextField(!textField)}
        >
          Add New{" "}
          <FontAwesomeIcon icon={faPlus} className="grocery-add-button-icon" />
        </button>
      </div>
      {textField && (
        <div className="grocery-add-text-field-box">
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <textarea
              className="grocery-add-text-field"
              value={newText}
              onChange={(e) => {
                onChangeTextArea(e);
              }}
            />
            <input type="submit" className="grocery-add-text-submit" />
          </form>
        </div>
      )}
    </div>
  );
};

GroceryAdd.propTypes = {
  addNew: PropTypes.func,
};

GroceryAdd.defaultProps = {
  addNew: () => {},
};

export default GroceryAdd;
