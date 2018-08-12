import React from "react";
import EventListener from "react-event-listener";

const noop = () => {};

class SwipeListener extends React.Component {
  static defaultProps = {
    onUp: noop,
    onDown: noop,
    onLeft: noop,
    onRight: noop
  };

  handleStart = evt => {
    this.xDown = evt.clientX || evt.touches[0].clientX;
    this.yDown = evt.clientY || evt.touches[0].clientY;
  };

  handleMove = evt => {
    if (!this.xDown || !this.yDown) {
      return;
    }

    var xUp = evt.clientX || evt.touches[0].clientX;
    var yUp = evt.clientY || evt.touches[0].clientY;

    this.xDiff = this.xDown - xUp;
    this.yDiff = this.yDown - yUp;

    // bail if movement is small
    if (Math.abs(this.yDiff) < 15 && Math.abs(this.xDiff) < 15) {
      return;
    }

    if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) {
      // Most significant.
      if (this.xDiff > 0) {
        this.onLeft();
      } else {
        this.onRight();
      }
    } else {
      if (this.yDiff > 0) {
        this.onUp();
      } else {
        this.onDown();
      }
    }

    // Reset values.
    this.xDown = null;
    this.yDown = null;
  };

  onLeft = () => {
    const { onLeft } = this.props;
    onLeft();
  };

  onRight = () => {
    const { onRight } = this.props;
    onRight();
  };

  onUp = () => {
    const { onUp } = this.props;
    onUp();
  };

  onDown = () => {
    const { onDown } = this.props;
    onDown();
  };

  render() {
    const { target } = this.props;
    return (
      <React.Fragment>
        <EventListener target={target} onTouchStart={this.handleStart} />
        <EventListener target={target} onTouchMove={this.handleMove} />
        <EventListener target={target} onMouseDown={this.handleStart} />
        <EventListener target={target} onMouseMove={this.handleMove} />
      </React.Fragment>
    );
  }
}

export default SwipeListener;
