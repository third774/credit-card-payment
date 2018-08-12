import React from "react";

import "./PayButton.scss";

const PayButton = ({ amount }) => (
  <div className="PayButton">
    <button className="PayButton__button">Pay ${amount}</button>
  </div>
);

export default PayButton;
