import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ children }) => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Contact Manager
          </Link>
          <ul className="navbar-nav mr-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts/add" className="nav-link">
                <i className="fas fa-plus" />
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts/about" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </div>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
