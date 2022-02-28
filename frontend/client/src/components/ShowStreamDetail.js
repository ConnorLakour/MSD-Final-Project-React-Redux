import React from "react";
import flv from "flv.js";

// https://www.npmjs.com/package/flv.js

export default class ShowStreamDetail extends React.Component {

 videoRef = React.createRef();

componentDidMount() {
 this.player = flv.createPlayer({
    type: 'flv',
    //connects to node-media-server
    url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
  })
  this.player.attachMediaElement(this.videoRef.current)
  this.player.load()
  // player.play()
}

componentWillUnmount(){
this.player.destroy()
}
  render() {
    
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls={true} />
      </div>
    );
  }
}
