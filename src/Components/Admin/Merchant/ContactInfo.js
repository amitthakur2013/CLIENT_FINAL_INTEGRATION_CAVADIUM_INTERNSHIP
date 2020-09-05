import React, { Fragment } from "react";
import Swal from "sweetalert2";

const ContactInfo = ({
  step,
  stepDecrement,
  stepIncrement,
  contactState,
  setContactState,
}) => {
  const onChange = (e) => {
    setContactState({
      ...contactState,
      [e.target.name]: e.target.value,
    });
  };

  const validator = () => {
    var {
      firstName,
      lastName,
      altNumber,
      communicationEmail,
      about,
    } = contactState;

    if (firstName === "" || firstName === null) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter valid First Name.",
        timer: 2000,
      });
      return;
    }

    if (lastName === "" || lastName === null) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter valid Last Name.",
        timer: 2000,
      });
      return;
    }

    if (altNumber !== "" && altNumber !== null) {
      if (/[6-9]{1}[0-9]{9}/.test(altNumber) === false) {
        Swal.fire({
          icon: "error",
          title: "Invalid Input",
          text: "Enter valid Alternate Number.",
          timer: 2000,
        });
        return;
      }
    }

    if (
      communicationEmail === "" ||
      communicationEmail === null ||
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        communicationEmail
      ) === false
    ) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter valid Communication Email.",
        timer: 2000,
      });
      return;
    }

    console.log(contactState);
    stepIncrement();
  };

  return (
    <Fragment>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          class="form-control"
          name="firstName"
          placeholder="Enter First Name"
          onChange={onChange}
          value={contactState.firstName}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          class="form-control"
          name="lastName"
          placeholder="Enter Last Name"
          onChange={onChange}
          value={contactState.lastName}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="altNumber">Alternate Mobile Number</label>
        <input
          type="text"
          class="form-control"
          name="altNumber"
          placeholder="Enter an Alternate Contact Number"
          onChange={onChange}
          value={contactState.altNumber}
        />
      </div>

      <div className="form-group">
        <label htmlFor="communicationEmail">Communication Email</label>
        <input
          type="email"
          class="form-control"
          name="communicationEmail"
          placeholder="Enter Communication Email"
          onChange={onChange}
          value={contactState.communicationEmail}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="about">About</label>
        <input
          type="text"
          class="form-control"
          name="about"
          placeholder="About Business"
          onChange={onChange}
          value={contactState.about}
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

export default ContactInfo;
