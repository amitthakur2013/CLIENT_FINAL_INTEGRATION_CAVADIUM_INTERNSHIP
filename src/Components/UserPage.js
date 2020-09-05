import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UserProfile from "./UserProfile";
import UserPageNav from "./UserPageNav";
import UserRefer from "./UserRefer";
import UserCredits from "./UserCredits";
import UserPromotions from "./UserPromotions";
import UserOrders from "./UserOrders";

const UserPage = ({ location, history }) => {
  const [active, setActive] = useState("");
  useEffect(() => {
    const { pathname } = location;
    const split = pathname.split("/");
    let l = split.length - 1;
    if (split[l] === "") l--;

    setActive(split[l]);
  }, [location]);
  return (
    <>
      <div id="wrapper" style={{ marginBottom: "30px" }}>
        <UserPageNav active={active} setActive={setActive} />
        <div className="container">
          <div className="row"></div>
          <Switch>
            <Route exact path="/user/vouchers">
              <UserOrders />
            </Route>
            <Route exact path="/user/credits">
              <UserCredits />
            </Route>
            <Route exact path="/user/profile">
              <UserProfile />
            </Route>
            <Route exact path="/user/refer">
              <UserRefer />
            </Route>
            <Route exact path="/user/promotions">
              <UserPromotions />
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default UserPage;
