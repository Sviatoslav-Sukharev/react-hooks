import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route, Switch} from "react-router-dom";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Alert from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";
import { GithubState } from "./context/github/GithubState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <React.Fragment>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </React.Fragment>
      </AlertState>
    </GithubState>
  );
}

export default App;
