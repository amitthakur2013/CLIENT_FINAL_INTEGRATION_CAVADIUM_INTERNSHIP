import React from "react";
import LoginModal from "./LoginModal";
import UserHeaderMenu from "./UserHeaderMenu";
import HowItWorksModal from "./HowItWorksModal";
import axios from 'axios';

const HeaderTop = ({ setShowChangeLocation, location }) => {
  const logOut=async(e) => {
    await axios.get("http://localhost:3124/api/customer/logout",{withCredentials:true});
    await localStorage.removeItem('user');
    window.location.reload(false);
  }
  return (
    <div className="top-part">
      <div className="container">
        <div className="city-select">
          <div href="#" className="display-block city-select-div">
            <div className="text-group">
              <div
                style={{ marginRight: 10 }}
                onClick={() => setShowChangeLocation(true)}
              >
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span> Select Location </span>
                <span className="city-name">
                  {location}
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </span>

                {/* <div className="text-group-content">
                  <p className="location" style={{ color: "white" }}></p>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <ul className="top-right fr">
          <li>
            <a
              // data-toggle="modal"
              // href="https://all4you.co.in/#how-it-works"
              href="#"
              className=""
            >
              <HowItWorksModal />
            </a>
          </li>
          <li>
            <a href="#" className="">
              Connect with us
            </a>
          </li>

          <li>
             <a className="" href="#"> 
            {localStorage.getItem('user') ? <UserHeaderMenu />  : <LoginModal />}
             </a> 
          </li>
          {localStorage.getItem('user') &&
          <li>
          <a className="" href="#"> 
          <button style={{border:"none",background:"inherit",color:"white"}} onClick={(e)=>logOut(e)} >LogOut</button>
          </a>
          </li>}
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
