import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Contacts from "./components/contacts/Contacts";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Header from "./components/layout/Header";
import AddContacts from "./components/contacts/AddContacts";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider>
      <Router history={createBrowserHistory()}>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact="true" path="/" component={Contacts} />
              <Route exact="true" path="/add" component={AddContacts} />
              <Route exact="true" path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
