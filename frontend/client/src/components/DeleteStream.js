import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { deleteStream, fetchStream } from "../actions";

const DeleteStream = props => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  });

  const renderContent = () => {
    if (!props.stream) {
      return `Are you sure you want to delete stream ?`;
    }
    return `Are you sure you want to delete stream ${props.stream.title} ?`;
  };

  return (
    <Modal
      deleteStream={props.deleteStream}
      streamId={props.match.params.id}
      streamInfo={renderContent()}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
  DeleteStream
);
