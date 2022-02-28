import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
class StreamList extends React.Component {
  state = { refresh: false };

 
  showDetails() {
    console.log("clicked");
  }

  async deleteStream(value) {
    this.setState({ refresh: true });
    console.log("deleting");
    await axios.delete("http://localhost:3001/stream/delete/" + value);
    
  }

  renderList() {
 
    return this.props.list.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <Link to={`/stream/display/${stream.id}`} className="content">
            {stream.title}
            <div className="description">
              {stream.description}
            </div>
          </Link>
          {/* if current userId = stream video userId, then that stream was created by that user,
          and has the ability to edit or delete them 
          else the current userId != streams.userId then he can favorite it.
          */}
          {this.props.userId === stream.userId
            ? <div className="right floated content">
                <Link
                  to={`/stream/edit/${stream.id}/${stream.userId}`}
                  className="ui primary button"
                >
                  Edit
                </Link>
                <Link
                  onClick={() => this.deleteStream(stream.id)}
                  //want to redirect to delete comp. modal but for now onClick is good enough
                  // to={`/stream/show/${stream.userId}`}
                  className="ui negative button"
                >
                  Delete
                </Link>
              </div>
            : <div className="right floated content">
                <Link to={`/stream/favorite/${stream.id}`} 
                className="ui negative button">
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

export default StreamList;
