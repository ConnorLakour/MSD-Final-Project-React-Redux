import React from "react";
import { connect } from "react-redux";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

import { fetchStream } from "../actions/index";

//Credentials
const credential = {
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
};
// Import required AWS SDK clients and commands for Node.js
const snsClient = new SNSClient({
  region: "us-east-1",
  credentials: credential
});

//when favorite button is clicked, a message is sent to the subscriber
class Favorite extends React.Component {
  sendSns = async () => {

    //parameter for publishing message
    const params = {
      Message: "Someone has made your video their favorite.",
      Subject: "Your video has been favorited!",
      TopicArn: "arn:aws:sns:us-east-1:385315034184:MSDProject"
    };

    try {
      const data = await snsClient.send(new PublishCommand(params));
      console.log("Success.", data);
      return data;
    } catch (err) {
      console.log(err.stack);
    }
  };

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.sendSns();
  }

  render() {
    return (
      <div>
        {!this.props.streams.email ? "Loading..." : this.props.streams.email}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    streams: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream })(Favorite);
