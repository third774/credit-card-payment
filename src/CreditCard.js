import React from "react";

import creditCards from "./creditCards.json";

import "./CreditCard.scss";

console.log(creditCards);

const CreditCard = ({ type, number, name, expiration }) => (
  <div className="CreditCard" style={creditCards[type].styles}>
    <div className="CreditCard__type">{type}</div>
    <div className="CreditCard__name">{name}</div>
    <div className="CreditCard__number">
      {number.map((n, i) => (
        <span key={i} className="CreditCard__number-section">
          {n}
        </span>
      ))}
    </div>
    <div className="CreditCard__expiration">{expiration}</div>
  </div>
);

export default CreditCard;
