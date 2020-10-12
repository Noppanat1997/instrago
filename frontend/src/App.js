import React from "react";
import Navbar from "./component/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/todo" component={Navbar} />
        <Navbar />
      </Switch>
    </Router>
  );
}

export default App;
