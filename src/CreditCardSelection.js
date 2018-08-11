import React from "react";
import CreditCard from "./CreditCard";

import "./CreditCardSelection.scss";

const CREDIT_CARDS = [
  {
    type: "visa",
    number: ["5560", "1209", "0987", "4312"],
    name: "Kevin Kipp",
    expiration: "02/22"
  },
  {
    type: "visa",
    number: ["5560", "1209", "0987", "4312"],
    name: "Kevin Kipp",
    expiration: "02/22"
  },
  {
    type: "visa",
    number: ["5560", "1209", "0987", "4312"],
    name: "Kevin Kipp",
    expiration: "02/22"
  },
  {
    type: "visa",
    number: ["5560", "1209", "0987", "4312"],
    name: "Kevin Kipp",
    expiration: "02/22"
  }
];

const CreditCardSelection = () => (
  <div className="CreditCardSelection">
    {CREDIT_CARDS.map((cc, i) => (
      <CreditCard key={i} {...cc} />
    ))}
  </div>
);

export default CreditCardSelection;
