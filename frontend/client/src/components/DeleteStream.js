import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const DeleteStream = props => {

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    console.log(this.state.userId)
    setRedirect(true);
    // console.log("here")
    // (async () => {
    //   await axios.delete(
    //     "http://localhost:3001/stream/delete/" + props.match.params.id
    //     );
    //   })();
  }, []);


  return (
    
    <div>
      {redirect ? <Redirect to={`/stream/show/${this.state.userId}`} /> : null}
    </div>
  );
};

export default DeleteStream;
