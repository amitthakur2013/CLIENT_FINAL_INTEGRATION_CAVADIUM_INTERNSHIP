import React from "react";
import { Link } from "react-router-dom";

const UserPageNav = ({ active }) => {
  console.log(active);
  return (
    <>
      <div className="container">
        <div className="menu">
          <div className="row">
            <div className="col-ms-12">
              <div className="order-list">
                <div className="user-header">
                  <ul className="order-menu">
                    <li>
                      <Link
                        to="/user/vouchers"
                        className={
                          active === "vouchers"
                            ? " tablinks active"
                            : "tablinks"
                        }
                        style={{ textDecoration: "none" }}
                      >
                        Vouchers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/user/credits"
                        className={
                          active === "credits" ? " tablinks active" : "tablinks"
                        }
                        style={{ textDecoration: "none" }}
                      >
                        Credits
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/user/profile"
                        className={
                          active === "profile" ? " tablinks active" : "tablinks"
                        }
                        style={{ textDecoration: "none" }}
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/user/refer"
                        className={
                          active === "refer" ? " tablinks active" : "tablinks"
                        }
                        style={{ textDecoration: "none" }}
                      >
                        Refer a friend
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/user/promotions"
                        className={
                          active === "promotions"
                            ? " tablinks active"
                            : "tablinks"
                        }
                        style={{ textDecoration: "none" }}
                      >
                        Promotions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPageNav;
