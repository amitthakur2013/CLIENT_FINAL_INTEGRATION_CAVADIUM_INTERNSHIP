import React, { Fragment } from "react";
import Swal from "sweetalert2";

const LocationInfo = ({
  step,
  stepIncrement,
  stepDecrement,
  locationState,
  setLocationState,
}) => {
  const onChange = (e) => {
    setLocationState({
      ...locationState,
      [e.target.name]: e.target.value,
    });
  };

  const validator = () => {
    var {
      state,
      city,
      area,
      addrLine1,
      addrLine2,
      landmark,
      zipcode,
    } = locationState;

    if (state === "Select") {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter a valid State.",
        timer: 2000,
      });
      return;
    }

    if (city === "Select") {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter a valid City.",
        timer: 2000,
      });
      return;
    }

    if (area === "Select") {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter a valid Area.",
        timer: 2000,
      });
      return;
    }

    if (addrLine1 === "" || addrLine1 === null) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter a valid Address.",
        timer: 2000,
      });
      return;
    }

    if (addrLine2 === "" || addrLine2 === null) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter a valid Address.",
        timer: 2000,
      });
      return;
    }

    if (zipcode === null) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter a valid Zipcode.",
        timer: 2000,
      });
      return;
    }

    console.log(locationState);
    stepIncrement();
  };

  return (
    <Fragment>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <select
          class="form-control"
          name="state"
          onChange={onChange}
          value={locationState.state}
          required
        >
          <option>Select</option>
          <option>State 1</option>
          <option>State 2</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="city">City</label>
        <select
          class="form-control"
          name="city"
          onChange={onChange}
          value={locationState.city}
          required
        >
          <option>Select</option>
          <option>City 1</option>
          <option>City 2</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="area">Area</label>
        <select
          class="form-control"
          name="area"
          onChange={onChange}
          value={locationState.area}
          required
        >
          <option>Select</option>
          <option>Area 1</option>
          <option>Area 2</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="addrLine1">Address Line One</label>
        <input
          type="text"
          class="form-control"
          name="addrLine1"
          onChange={onChange}
          value={locationState.addrLine1}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="addrLine2">Address Line Two</label>
        <input
          type="text"
          class="form-control"
          name="addrLine2"
          onChange={onChange}
          value={locationState.addrLine2}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="landmark">Landmark</label>
        <input
          type="text"
          class="form-control"
          name="landmark"
          onChange={onChange}
          value={locationState.landmark}
        />
      </div>

      <div className="form-group">
        <label htmlFor="zipcode">Zip Code</label>
        <input
          type="number"
          class="form-control"
          name="zipcode"
          onChange={onChange}
          value={locationState.zipcode}
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

export default LocationInfo;
