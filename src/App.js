import React, { Component } from "react";
import Phone from "./Phone";

import "./App.scss";
import Header from "./Header";
import CreditCardSelection from "./CreditCardSelection";
import Option from "./Option";

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
            input={<input type="checkbox" />}
          />
          <Option
            label="E-mail"
            name="email"
            input={<input type="email" readOnly value="kevin.kipp@gmail.com" />}
          />
        </Phone>
      </div>
    );
  }
}

export default App;
