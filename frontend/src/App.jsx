import React from "react";
import Navbar from "./component/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoPage from "./container/todoPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/todo" component={TodoPage} />
        <Navbar />
      </Switch>
    </Router>
  );
}

export default App;
