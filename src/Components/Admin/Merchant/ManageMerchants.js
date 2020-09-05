import React, { Fragment } from "react";

const ManageMerchants = () => {
  return (
    <Fragment>
      <div>
        <table className="table">
          <thead className="thead-dark">
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Outlets</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </thead>

          <tbody>
            <tr>
              <th scope="row">1</th>
              <th>Username</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Outlets</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ManageMerchants;
