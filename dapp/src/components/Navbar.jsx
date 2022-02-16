import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand nav-link">
              <NavLink className="nav-link" to="/">
                <img src="./image/logo.png" height="30px" alt="logo" />
              </NavLink>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <NavLink className="nav-link" to="/supplychain">
                  SupplyChain
                </NavLink>
                <NavLink className="nav-link" to="/farmer">
                  Farmer
                </NavLink>
                <NavLink className="nav-link" to="/distributor">
                  Distributor
                </NavLink>
                <NavLink className="nav-link" to="/retailer">
                  Retailer
                </NavLink>
                <NavLink className="nav-link" to="/consumer">
                  Consumer
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
