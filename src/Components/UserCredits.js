import React from "react";

const UserCredits = () => {
  let user=JSON.parse(localStorage.getItem("user")).data;
  return (
    <>
      <h1>Credits: {user.credit}</h1>
    </>
  );
};

export default UserCredits;
