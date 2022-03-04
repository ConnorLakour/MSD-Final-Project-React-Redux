import React from "react";
import { Link } from "react-router-dom";
import OAuth from "./OAuth";
import Fboauth from "./Fboauth";
const Header = props => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Dope Streams
      </Link>
      <Link to="/stream/create" className="item">
        Create Stream
      </Link>
      <br />
      <br />
      <Link to="/stream/show" className="item">
        Show All Stream
      </Link>
      <div className="right menu">
        {/* <button>Streams</button>  */}
        <OAuth
          // setIsSignedIn={props.setIsSignedIn}
          // isSignedIn={props.isSignedIn}
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
