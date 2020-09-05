import React, { Fragment } from "react";
import Swal from "sweetalert2";

const BusinessInfo = ({
  step,
  stepDecrement,
  stepIncrement,
  businessState,
  setBusinessState,
}) => {
  const onChange = (e) => {
    console.log(e.target.value);
    if (e.target.name.file === "logo") {
      setBusinessState({
        ...businessState,
        [e.target.name]: e.target.files[0],
      });
    }
    setBusinessState({
      ...businessState,
      [e.target.name]: e.target.value,
    });
  };

  const validator = () => {
    var { businessType, title, description } = businessState;

    if (businessType == "Select") {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter valid Business Type.",
        timer: 2000,
      });
      return;
    }

    if (title === "" || title === null) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter a valid Business Title.",
        timer: 2000,
      });
      return;
    }

    if (description === "" || description === null) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter a valid Business Description.",
        timer: 2000,
      });
      return;
    }
    console.log(businessState);
    stepIncrement();
  };

  return (
    <Fragment>
      <div className="form-group">
        <label htmlFor="businessType">Business Type</label>
        <select
          class="form-control"
          name="businessType"
          onChange={onChange}
          value={businessState.businessType}
          required
        >
          <option>Select</option>
          <option>single</option>
          <option>multi</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          class="form-control"
          name="title"
          placeholder="Enter Business Title"
          onChange={onChange}
          value={businessState.title}
          required
        />
      </div>

      <div class="form-group">
        <label htmlFor="logo">Business Logo</label>
        <input
          type="file"
          class="form-control-file"
          name="logo"
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          class="form-control"
          name="description"
          placeholder="Description of Business"
          onChange={onChange}
          value={businessState.description}
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

export default BusinessInfo;
