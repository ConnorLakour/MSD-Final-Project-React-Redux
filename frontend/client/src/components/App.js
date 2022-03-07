import { Router, Route, BrowserRouter } from 'react-router-dom';
import React, { useState } from "react";
import { createBrowserHistory } from "history";

import "../App.css";
import Homepage from "./Homepage";
import Favorite from "./Favorite";
import ShowStreams from "./ShowStreams";
import EditStream from "./EditStream";
import DeleteStream from "./DeleteStream";
import CreateStream from "./CreateStream";
import ShowStreamDetail from "./ShowStreamDetail";
import Header from "./Header";
// import history from '../history'

// const history = createBrowserHistory();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userId, setUserId] = useState("");

  console.log(userId);

  return (
    <div>
      {/* <div /> */}
      <BrowserRouter 
      // history={history}
      >
        <div>
        <Header userId={userId} setUserId={setUserId} />
       
          <Route path="/stream/show" exact component={ShowStreams} />
          <Route path="/stream/edit/:id" exact component={EditStream} />
          <Route path="/stream/delete/:id" exact component={DeleteStream} />
          <Route path="/stream/create" exact component={CreateStream} />
          <Route path="/stream/display/:id" exact component={ShowStreamDetail} />
          <Route path="/stream/favorite/:id" exact component={Favorite} />
          <Route path="/" exact component={Homepage} />
       
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
