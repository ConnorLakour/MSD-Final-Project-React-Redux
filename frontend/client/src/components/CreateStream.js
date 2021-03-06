import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { SNSClient, SubscribeCommand } from "@aws-sdk/client-sns";

import { createStream } from "../actions";
import StreamForm from "./StreamForm";

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

class CreateStream extends React.Component {
  state = {  email: "" , redirect: false};

  async subscribeToSns() {
    const params = {
      Protocol: "email",
      TopicArn: "arn:aws:sns:us-east-1:385315034184:MSDProject",
      Endpoint: this.state.email
    };
    try {
      const data = await snsClient.send(new SubscribeCommand(params));
      console.log("Success.", data);
      return data;
    } catch (err) {
      console.log(err.stack);
    }
  }

  componentDidMount() {
    //get userId and add it to the redirect url
    // console.log(this.props.match.params)
    // this.setState({ userId: this.props.match.params.userId });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Create Stream</h2>
        <StreamForm
          onSubmit={values => {
            this.onSubmit(values);
          }}
          />
          {this.state.redirect
            ? <Redirect to={`/stream/show`} />
            : null}
      </React.Fragment>
    );
  }

  /**
   * 
   * @param {*} values coming from redux-form
   * u
   */
  onSubmit(values) {
    const obj = { ...values };
    obj.userId = this.props.currentUserId;
    this.props.createStream(obj);
    this.setState({ ...this.state, redirect: true, email: values.email });
     this.subscribeToSns();
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.autho.userId
  };
};

export default connect(mapStateToProps, { createStream })(CreateStream);
