import {
  BrowserRouter,
  Router,
  Route,
  Link,
  withRouter,
  Switch
} from "react-router-dom";
import React, { useState } from "react";

import "../App.css";
import Homepage from "./Homepage";
import Favorite from "./Favorite";
import ShowStreams from "./ShowStreams";
import EditStream from "./EditStream";
import DeleteStream from "./DeleteStream";
import CreateStream from "./CreateStream";
import ShowStreamDetail from "./ShowStreamDetail";
import Header from "./Header";
import history from '../history'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userId, setUserId] = useState("");

  console.log(userId)

  return (
    <div>
      <div />
      <Router history={history}>
        <Header
          // setIsSignedIn={setIsSignedIn}
          // isSignedIn={isSignedIn}
          userId={userId}
          setUserId={setUserId}
        />

        {/* {isSignedIn
          ?  */}
          <div>
          
              {/* <Link to={"/stream/create/" + userId}>Create Stream</Link>
              <Link to={"/stream/show/" + userId}>Show All Stream</Link> */}

              <Route
                path="/stream/show"
                exact
                component={ShowStreams}
              />
              <Route
                path="/stream/edit/:id"
                exact
                component={EditStream}
              />
              <Route path="/stream/delete/:id" 
              exact 
              component={DeleteStream} />
              <Route
                path="/stream/create"
                exact
                component={CreateStream}
              />
              <Route
                path="/stream/display/:id"
                exact
                component={ShowStreamDetail}
              />
              <Route path="/stream/favorite/:id"
               exact
                component={Favorite} />
            </div>
          : <div>
              <Route path="/" exact component={Homepage} />
            </div>
            {/* } */}
      </Router>
    </div>
  );
}

export default App;
