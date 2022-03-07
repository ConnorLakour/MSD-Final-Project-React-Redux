import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";

const Modal = props => {
  const [redirect, setRedirect] = useState(false);

  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={() => {
        setRedirect(true);
      }}
    >
      <div
        className="ui standard modal visible active"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className="header">Delete Stream</div>
        <div className="content">
          {props.streamInfo}
        </div>
        <div className="actions">
          <button
            className="ui primary button"
            onClick={() => {
              setRedirect(true);
              props.deleteStream(props.streamId);
            }}
          >
            Delete
          </button>
          <button
            className="ui button"
            onClick={() => {
              setRedirect(true);
            }}
          >
            Cancel
          </button>
        </div>
        {redirect ? <Redirect to={`/stream/show`} /> : null}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
