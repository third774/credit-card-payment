import React, { Component } from "react";
import Phone from "./Phone";

import "./App.scss";
import Header from "./Header";
import CreditCardSelection from "./CreditCardSelection";
import Option from "./Option";
import Slider from "./Slider";
import ApplePay from "./ApplePay";
import PayButton from "./PayButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Phone>
          <Header />
          <CreditCardSelection />
          <Option
            label="Keep me logged in"
            name="keepLoggedIn"
            input={<Slider />}
          />
          <Option
            label="E-mail"
            name="email"
            input={<input type="email" readOnly value="kevin.kipp@gmail.com" />}
          />
          <ApplePay />
          <PayButton amount="29" />
        </Phone>
      </div>
    );
  }
}

export default App;
