import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";
import { withRouter } from "react-router-dom";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: { name: "", email: "", phone: "" }
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone, errors } = this.state;
    if (name === "") {
      this.setState({ errors: { name: "Name field is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email field is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone field is required" } });
      return;
    }

    const updateContact = {
      name,
      email,
      phone,
      errors
    };

    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );
    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    //clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };
  onChangeValue = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div
                className="card-header"
                onClick={this.toggleInfo}
                style={{ cursor: "pointer" }}
              >
                <h3>Edit Contact</h3>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    className="form-control form-control-sm"
                    name="name"
                    placeholder="insert name.."
                    value={name}
                    onChange={this.onChangeValue}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    className="form-control form-control-sm"
                    name="email"
                    placeholder="insert email.."
                    value={email}
                    onChange={this.onChangeValue}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    className="form-control form-control-sm"
                    name="phone"
                    placeholder="insert phone number.."
                    value={phone}
                    onChange={this.onChangeValue}
                    error={errors.phone}
                  />
                  <button
                    type="submit"
                    className="btn btn-success btn-sm btn-block"
                  >
                    Update contact
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default withRouter(EditContact);
