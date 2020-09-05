import React, { Fragment, useState } from "react";
import Swal from "sweetalert2";

const UserInfo = ({
  step,
  stepDecrement,
  stepIncrement,
  userState,
  setUserState,
}) => {
  const onChange = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value,
    });
  };

  const validator = () => {
    var { businessName, phoneNo, email, password, confirmPassword } = userState;
    // Required fields are filled
    if (
      businessName === "" ||
      phoneNo === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Kindly fill all fields.",
        timer: 2000,
      });
      return;
    }
    // Passwords Match
    if (password.trim() !== confirmPassword.trim()) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Passwords do not match",
        timer: 2000,
      });

      return;
    }
    // Phone No is formated [6-9]{1}[0-9]{9}
    if (/[6-9]{1}[0-9]{9}/.test(phoneNo) === false) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Incorrect phone number.",
        timer: 2000,
      });

      return;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Invalid Email Id.",
        timer: 2000,
      });

      return;
    }

    stepIncrement();
  };

  return (
    <Fragment>
      <div className="form-group">
        <label for="businessName">Business Name</label>
        <input
          type="text"
          class="form-control"
          name="businessName"
          placeholder="Enter Business Name"
          onChange={onChange}
          value={userState.businessName}
          required
        />
      </div>

      <div className="form-group">
        <label for="phoneNo">Phone Number</label>
        <input
          type="text"
          class="form-control"
          name="phoneNo"
          placeholder="Enter 10-digit contact number"
          onChange={onChange}
          value={userState.phoneNo}
          required
        />
      </div>

      <div className="form-group">
        <label for="email">Email Id</label>
        <input
          type="email"
          class="form-control"
          name="email"
          placeholder="Enter Email Id"
          onChange={onChange}
          value={userState.email}
          required
        />
      </div>

      <div className="form-group">
        <label for="password">Password</label>
        <input
          type="text"
          class="form-control"
          name="password"
          placeholder="Enter a secure password"
          onChange={onChange}
          value={userState.password}
          required
        />
      </div>

      <div className="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="text"
          class="form-control"
          name="confirmPassword"
          placeholder="Enter a secure password"
          onChange={onChange}
          value={userState.confirmPassword}
          required
        />
      </div>

      <br />

      <div style={{ width: "150px", margin: "auto" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={stepDecrement}
        >
          Back
        </button>
        <button
          type="button"
          className="btn btn-success"
          style={{ marginLeft: "20px" }}
          onClick={validator}
        >
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default UserInfo;
