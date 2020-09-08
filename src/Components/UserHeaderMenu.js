import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import orderLogo from "../assets/order-ic.svg";
import creditsLogo from "../assets/my-creadit.svg";
import profileLogo from "../assets/profile-user.svg";
import referLogo from "../assets/refer-friend.svg";
import promoLogo from "../assets/promotions.svg";
import signoutLogo from "../assets/exit.svg";
import accountLogo from "../assets/user.svg";

const UserHeaderMenu = () => {
  const [show, setShow] = useState(false);
  //const [user,setUser]=useState(undefined);

  const user=JSON.parse(localStorage.getItem("user")).data;

  const dropLink = (url, label, logo) => (
    <Link
      onClick={() => setShow(false)}
      className="dropdown-link active"
      to={`/user/${url}`}
      style={{ color: "black" }}
    >
      <img style={{ maxWidth: "20%", marginRight: "5px" }} src={logo} />
      {label}
    </Link>
  );
  return (
    <Dropdown show={show}>
      <Dropdown.Toggle
        show={show}
        as={CustomToggle}
        setShow={setShow}
        id="dropdown-custom-components"
      >My Account
      </Dropdown.Toggle>

      {show && (
        <Dropdown.Menu setShow={setShow} as={CustomMenu}>
          <Dropdown.Item
            as={() => {
              return (
                <div style={{ background: "purple" }}>
                  <Link to={`/user/profile`}>
                    <img
                      style={{ maxWidth: "20%", marginRight: "5px" }}
                      src={accountLogo}
                    />
                    {user.name}
                  </Link>
                </div>
              );
            }}
            eventKey="vouchers"
          />
          <Dropdown.Item
            as={() => dropLink("vouchers", "My Orders", orderLogo)}
            eventKey="vouchers"
          />
          <Dropdown.Item
            as={() => dropLink("credits", "My Credits", creditsLogo)}
            eventKey="credits"
          />
          <Dropdown.Item
            as={() => dropLink("profile", "My profile", profileLogo)}
            eventKey="profile"
          />
          <Dropdown.Item
            as={() => dropLink("refer", "Refer a friend", referLogo)}
            eventKey="refer"
          />
          <Dropdown.Item
            as={() => dropLink("promotions", "Promotions", promoLogo)}
            eventKey="promotions"
          />
          <Dropdown.Item
            as={() => dropLink("signout", "Sign out", signoutLogo)}
            eventKey="signout"
          />
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

export default UserHeaderMenu;

const CustomMenu = React.forwardRef(
  (
    { setShow, children, style, className, "aria-labelledby": labeledBy },
    ref
  ) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
        onMouseLeave={() => setShow(false)}
      >
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);
const CustomToggle = React.forwardRef(
  ({ show, onClick, children, setShow }, ref) => {
    return (
      <div
        className="header-account"
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          console.log(e);
          onClick(e);
          setShow(true);
        }}
        // onMouseEnter={() => {
        //   // setShow(true);
        //   // console.log("t", show);
        //   show ? setShow(false) : setShow(true);
        // }}
        // onMouseLeave={() => {
        //   setShow(false);
        //   // console.log("t", show);
        //   // show ? setShow(false) : setShow(true);
        // }}
      >
        {children} &#x25bc;
      </div>
    );
  }
);
