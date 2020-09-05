import React, { Fragment } from "react";
import Swal from "sweetalert2";

const Images = ({ step, stepDecrement, stepIncrement, images, setImages }) => {
  const onChange = (e) => {
    setImages(e.target.files);
  };

  const validator = () => {
    // ! How to validate?
    if (images == []) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Kindly Add Images.",
        timer: 2000,
      });
      return;
    }

    console.log(images);
    stepIncrement();
  };

  return (
    <Fragment>
      <div className="form-group">
        <label htmlFor="images">Images</label>
        <input
          type="file"
          class="form-control-file"
          name="images"
          multiple
          onChange={onChange}
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

export default Images;
