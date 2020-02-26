import React, { Component } from "react";

class Key extends Component {
  render() {
    return (
      <button
        className="btn btn-primary btn-lg m-2 bg-dark text-white-50"
        onClick={this.props.onAppend}
      >
        {this.formatValue()}
      </button>
    );
  }
  formatValue() {
    const { value } = this.props.number;
    return value;
  }
}

export default Key;
