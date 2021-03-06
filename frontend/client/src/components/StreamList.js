import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchStreams } from "../actions";

class StreamList extends React.Component {
  state = { list: [], refresh: false };

  componentDidMount() {
    this.props.fetchStreams();
  }


  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle alligned icon camera" />
          <Link to={`/stream/display/${stream.id}`} className="content">
            {stream.title}
            <div className="description">
              {stream.description}
            </div>
          </Link>
          {/* if current userId = stream  userId, then that stream was created by that user,
          and has the ability to edit or delete them 
          else the current userId != streams.userId then they can only favorite it.
          */}
          {this.props.currentUserId === stream.userId
            ? <div className="right floated content">
                <Link
                  to={`/stream/edit/${stream.id}`}
                  className="ui primary button"
                >
                  Edit
                </Link>
                <Link
                  to={`/stream/delete/${stream.id}`}
                  className="ui negative button"
                >
                  Delete
                </Link>
              </div>
            : <div className="right floated content">
                <Link
                  to={`/stream/favorite/${stream.id}`}
                  className="ui negative button"
                >
                  <i className="favorite icon" />Favorite
                </Link>
              </div>}
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.list);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //Object.values turns all values into an array
  return {
    streams: Object.values(state.streams),
    currentUserId: state.autho.userId,
    isSignedIn: state.autho.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
