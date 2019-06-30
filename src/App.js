import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Contacts from "./components/contacts/Contacts";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Header from "./components/layout/Header";
import AddContacts from "./components/contacts/AddContacts";
import EditContact from "./components/contacts/EditContact";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <Provider>
      <Router
        history={createBrowserHistory()}
        basename={process.env.PUBLIC_URL}
      >
        <div className="App">
          <Switch>
            <Route
              exact={true}
              path="/"
              render={() => (
                <Header>
                  <Contacts />
                </Header>
              )}
            />
            <Route
              exact={true}
              path="/contacts/add"
              render={() => (
                <Header>
                  <AddContacts />
                </Header>
              )}
            />
            <Route
              exact={true}
              path="/contacts/edit/:id"
              render={() => (
                <Header>
                  <EditContact />
                </Header>
              )}
            />
            <Route
              exact={true}
              path="/about"
              render={() => (
                <Header>
                  <About />
                </Header>
              )}
            />
            <Route
              render={() => (
                <Header>
                  <NotFound />
                </Header>
              )}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
