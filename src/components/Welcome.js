import React, { Component } from "react";

// Class component
// 1] Class should extends Component class from react
// 2] Class should implements render method that returns some HTML

class Welcome extends Component {
  render() {
    return <h1>Welcome {this.props.name} {this.props.surname}</h1>;
  }
}

export default Welcome;
