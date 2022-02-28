import React from "react";
import { Link } from "react-router-dom";
import OAuth from "./OAuth";
import Fboauth from './Fboauth'
const Header = props => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="item" to="/">
        Dope Streams
      </Link>
      <Link className="item" to={"/stream/create/" + props.userId}>Create Stream</Link>
      <br/>
      <br/>
      <Link className="item" to={"/stream/show/" + props.userId}>Show All Stream</Link>
      <div className="right menu">
        {/* <button>Streams</button>  */}
        <OAuth
          setIsSignedIn={props.setIsSignedIn}
          isSignedIn={props.isSignedIn}
          userId={props.userId}
          setUserId={props.setUserId}
        />
        {/* <Fboauth/> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
