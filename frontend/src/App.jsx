import React from "react";
import Navbar from "./component/navbar";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoPage from "./container/todoPage";
import DonePage from "./container/donePage";
import ContactPage from "./container/contactPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={TodoPage} />
          <Route exact path="/done" component={DonePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Navbar />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
