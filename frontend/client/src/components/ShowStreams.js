import React from "react";
import axios from "axios";

import { fetchStreams } from "../actions";
import StreamList from "./StreamList";
import { connect } from "react-redux";

class ShowStreams extends React.Component {

  render() {
    return (
      <div>
        <StreamList />
      </div>
    );
  }
}

export default ShowStreams;
