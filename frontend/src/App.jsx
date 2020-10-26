import React from "react";
import Navbar from "./component/navbar";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoPage from "./container/todoPage";
import DonePage from "./container/donePage";
import ContactPage from "./container/contactPage";
import CreatePage from "./container/createPage";
import EditPage from "./container/editPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={TodoPage} />
          <Route exact path="/done" component={DonePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/create" component={CreatePage} />
          <Route exact path="/edit" component={EditPage} />
          <Navbar />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
