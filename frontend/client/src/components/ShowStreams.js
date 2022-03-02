import React from "react";
import StreamList from "./StreamList";
import axios from "axios";

class ShowStreams extends React.Component {
  state = { list: [], userId: '' };

  //this component is rendering twice, how can i make this render only once?
  streams = () => {
    axios.get("http://localhost:3001/stream/show").then(streamsList => {
      this.setState({ list: streamsList.data });
    });
  };
  componentDidMount() {
    // console.log(this.props.match.params.userId)
    this.setState({ userId: this.props.match.params.userId})
    this.streams();
  }
  render() {
    return (
      <div>
        <StreamList 
        // list={this.state.list}
        //  userId={this.state.userId} 
         />
      </div>
    );
  }
}

export default ShowStreams;
