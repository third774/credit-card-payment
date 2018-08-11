import React, { Component } from "react";
import Phone from "./Phone";

import "./App.scss";
import Header from "./Header";
import CreditCardSelection from "./CreditCardSelection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Phone>
          <Header />
          <CreditCardSelection />
        </Phone>
      </div>
    );
  }
}

export default App;
