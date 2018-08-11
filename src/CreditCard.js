import React from "react";

import "./CreditCard.scss";

const CreditCard = ({ type, number, name, expiration }) => (
  <div className="CreditCard">
    <div className="CreditCard__type">{type}</div>
    <div className="CreditCard__name">{name}</div>
    <div className="CreditCard__number">{number}</div>
    <div className="CreditCard__expiration">{expiration}</div>
  </div>
);

export default CreditCard;
