import React, { Fragment } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Setting = ({
  step,
  stepDecrement,
  stepIncrement,
  statusState,
  setStatusState,
  formData,
}) => {
  const submitForm = () => {
    console.log(formData);
    try {
      axios
        .post("http://localhost:3124/api/merchant/new", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
        });

      // if (res.status == 200) {
      //   Swal.fire({
      //     icon: "success",
      //     title: "Success",
      //     text: "New Merchant Created Successfully.",
      //     timer: 2000,
      //   });
      // } else if (res.status == 400) {
      //   console.log(res.data);
      //   Swal.fire({
      //     icon: "error",
      //     title: "Server Error",
      //     text: `${res.data}`,
      //     timer: 2000,
      //   });
      // }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Kindly check all input fields.",
        timer: 2000,
      });
    }
  };

  const onChange = (e) => {
    setStatusState(e.target.value.toString().trim());
  };

  const validator = () => {
    if (statusState === "Select") {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Invalid Status setting.",
        timer: 2000,
      });
      return;
    }

    submitForm();
  };

  return (
    <Fragment>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          class="form-control"
          name="status"
          onChange={onChange}
          value={statusState}
          required
        >
          <option>Select</option>
          <option>active</option>
          <option>inactive</option>
        </select>
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

export default Setting;
