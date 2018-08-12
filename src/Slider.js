import React from "react";

import "./Slider.scss";

const Slider = ({ checked, onChange, id }) => (
  <label className="Switch">
    <input type="checkbox" checked={checked} id={id} onChange={onChange} />
    <span className="Slider Slider--round" />
  </label>
);

export default Slider;
