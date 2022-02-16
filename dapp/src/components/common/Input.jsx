import React, { Component } from "react";

export default class Input extends Component {
  render() {
    const { name, label, error, value, type, onChange } = this.props;
    return (
      <div className="from-group">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          id={name}
          className="form-control"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}
