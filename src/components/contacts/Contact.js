import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class Contact extends Component {
  state = { showInfo: false };
  toggleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  deleteOnClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={this.toggleInfo}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />

                <i
                  className="fas fa-times"
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={this.deleteOnClick.bind(this, id, dispatch)}
                />
                <Link to={`contacts/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      float: "right",
                      cursor: "pointer",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {this.state.showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
