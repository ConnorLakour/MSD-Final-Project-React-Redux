import StreamForm from "./StreamForm";
import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditStream = props => {
  const [stream, setStream] = useState("");
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    const fetchStream = async () => {
      const streamVideo = await axios.get(
        "http://localhost:3001/stream/show/" + props.match.params.id
      );
      // console.log("line 12 " + stream.data)
      setStream(streamVideo.data);
    };

    fetchStream();
  }, []);

  const onSubmit = values => {
    axios.put(
      `http://localhost:3001/stream/edit/${props.match.params.id}/${props.match.params.userId}` ,
      values
      );
      setRedirect(true)
  };

 
  return (
    <React.Fragment>
      {redirect ? <Redirect to={`/stream/show/${props.match.params.userId}`} /> : null}
      <h2>Edit Stream</h2>
      <StreamForm
        //title & desc. props will populate the input fields
        title={stream ? stream[0].title : ""}
        description={stream ? stream[0].description : ""}
        onSubmit={values => onSubmit(values)}
      />
    </React.Fragment>
  );
};

export default EditStream;
