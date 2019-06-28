import React, { Component } from "react";
import { Consumer } from "../../context";
import Contact from "./Contact";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> Manager
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
