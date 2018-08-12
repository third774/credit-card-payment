import React from "react";

import "./Option.scss";

const Option = ({ label, name, input }) => (
  <div className="Option">
    <label htmlFor={name}>{label}</label>
    {React.cloneElement(input, { id: name })}
  </div>
);

export default Option;
