import React, { Component } from "react";

export default class Homepage extends Component {
  render() {
    return (
      <div className="ui warning message">
        <i className="close icon" />
        <div className="header">You must sign in with Google</div>
      </div>
    );
  }
}
