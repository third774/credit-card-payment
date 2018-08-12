import React from "react";
import CreditCard from "./CreditCard";

import "./CreditCardSelection.scss";
import SwipeListener from "./SwipeListener";

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

class CreditCardSelection extends React.Component {
  state = {
    selection: 0
  };

  container = React.createRef();

  componentDidMount() {
    // force update to re-render with container ref
    this.forceUpdate();
  }

  decrementSelection = () => {
    this.setState({
      selection: Math.max(this.state.selection - 1, 0)
    });
  };

  incrementSelection = () => {
    this.setState({
      selection: Math.min(this.state.selection + 1, CREDIT_CARDS.length - 1)
    });
  };

  render() {
    const { selection } = this.state;
    return (
      <div
        className="CreditCardSelection"
        style={{ transform: `translateX(-${320 * selection}px)` }}
        ref={this.container}
      >
        {CREDIT_CARDS.map((cc, i) => (
          <CreditCard key={i} {...cc} selected={selection === i} />
        ))}
        {this.container.current && (
          <SwipeListener
            target={this.container.current}
            onLeft={this.incrementSelection}
            onRight={this.decrementSelection}
          />
        )}
      </div>
    );
  }
}

export default CreditCardSelection;
