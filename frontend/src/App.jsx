import React from "react";
import Navbar from "./component/navbar";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoPage from "./container/todoPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={TodoPage} />
          <Navbar />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
