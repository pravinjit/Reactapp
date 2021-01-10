import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "./Alert";
import _ from "lodash";

export default (props) => {
  return (
    <div className="form">
      <p>
        <h2>Login Now</h2>{" "}
      </p>

      <TextField
        error={props.error}
        onChange={props.handleChange}
        fullWidth
        label="Email"
        placeholder="Enter your Email ID"
        name="email"
        margin="normal"
      />

      <TextField
        error={props.error}
        onChange={props.handleChange}
        fullWidth
        label="Phone Number"
        placeholder="Enter Phone Number"
        type="number"
        name="phone"
        margin="normal"
      />

      <Button
        onClick={props.handleClick}
        className="form-btn"
        fullWidth
        variant="contained"
      >
        Login
      </Button>
      {!_.isUndefined(props.alert.type) && (
        <Alert type={props.alert.type} msg={props.alert.msg} />
      )}

      <div className="footer">
        <Link to="register">Do not have an account? Register Now</Link>
      </div>
    </div>
  );
};
