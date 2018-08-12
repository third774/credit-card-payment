import React from "react";

import "./Option.scss";

const Option = ({ label, name, input }) => (
  <div className="Option">
    <label for={name}>{label}</label>
    {React.cloneElement(input, { id: name })}
  </div>
);

export default Option;
