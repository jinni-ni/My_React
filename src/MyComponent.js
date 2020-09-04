import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        hi my name is {name}. <br />
        children value is {children}. <br />
        My favortie Number is {favoriteNumber}.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumbe: PropTypes.number.isRequired,
};

export default MyComponent;
