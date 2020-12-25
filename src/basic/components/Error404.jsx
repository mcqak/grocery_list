import React from "react";
import "../css/basic.css";
import Footer from "./Footer.jsx";

const Error404 = () => {
  return (
    <div className="error-404">
      <div className="error-404-content">
        <h2 className="error-404-title">404</h2>
        <span className="error-404-text">That page doesn`t exist.</span>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
