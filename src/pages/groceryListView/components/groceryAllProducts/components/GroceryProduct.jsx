import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import GroceryEntryView from "../../groceryEntryView/GroceryEntryView.jsx"

const GroceryProduct = ({
  product,
  changeActiveStatus,
  removeSelf,
  openTaskDetail,
  taskDetail,
}) => {
  let [active, setActive] = useState(product.status);
  let [taskModal, setTaskModal] = useState(false);
  const requestedDataModal = taskDetail ? taskDetail : {};

  const taskClick = () => {
    changeActiveStatus(product.id);
    setActive(!active);
  };

  const openModal = () => {
    setTaskModal(true);
    openTaskDetail(product.id);
  };

  const closeModal = () => {
    setTaskModal(false);
  };
  return (
    <React.Fragment>
      <div
        className="grocery-product"
        style={{
          display: "flex",
          marginTop: "20px",
          padding: "20px",
          fontWeight: "bold",
        }}
      >
        <div className="grocery-product-name">{product.text}</div>
        <button
          className="grocery-product-status"
          type="button"
          onClick={() => {
            taskClick();
          }}
        >
          {active ? "Active" : "Non active"}
        </button>
        <div className="grocery-product-time">{`Seconds: ${product.time}`}</div>
        <div className="grocery-product-remove">
          <button type="button">
            <FontAwesomeIcon
              icon={faTimes}
              className="grocery-product-remove-icon"
              onClick={() => removeSelf(product.id)}
            />
          </button>
        </div>
        <button type="button" onClick={() => openModal()}>
          Show me more
        </button>
      </div>
      {taskModal && (
        <GroceryEntryView
          taskDetail={taskDetail}
          closeModal={closeModal}
        />
      )}
    </React.Fragment>
  );
};

GroceryProduct.propTypes = {
  product: PropTypes.object,
  changeActiveStatus: PropTypes.func,
  removeSelf: PropTypes.func,
  openTaskDetail: PropTypes.func,
  modalChang: PropTypes.func,
  taskDetail: PropTypes.object,
};

export default GroceryProduct;
