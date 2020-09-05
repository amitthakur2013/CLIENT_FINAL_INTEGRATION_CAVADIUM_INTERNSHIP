import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import BusinessInfo from "./BusinessInfo";
import ContactInfo from "./ContactInfo";
import Images from "./Images";
import Setting from "./Setting";
import LocationInfo from "./LocationInfo";

const CreateMerchant = () => {
  const [step, setStep] = useState(1);

  const [userState, setUserState] = useState({
    businessName: "",
    phoneNo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [businessState, setBusinessState] = useState({
    businessType: "Select",
    title: "",
    logo: "",
    description: "",
  });

  const [contactState, setContactState] = useState({
    firstName: "",
    lastName: "",
    altNumber: "",
    communicationEmail: "",
    about: "",
  });

  const [locationState, setLocationState] = useState({
    state: "Select",
    city: "Select",
    area: "Select",
    addrLine1: "",
    addrLine2: "",
    landmark: "",
    zipcode: "",
  });

  const [images, setImages] = useState([]);

  const [statusState, setStatusState] = useState("Select");

  var formData = {
    businessName: userState.businessName.trim(),
    email: userState.email.trim(),
    phoneNo: userState.phoneNo.trim(),
    password: userState.password.trim(),
    confirmPassword: userState.confirmPassword.trim(),
    status: statusState.trim(),
    businessInfo: {
      businessType: businessState.businessType,
      title: businessState.title.trim(),
      logo: businessState.logo,
      description: businessState.description,
    },
    contactInfo: {
      firstName: contactState.firstName.trim(),
      lastName: contactState.lastName.trim(),
      altNumber: contactState.altNumber.trim(),
      communicationEmail: contactState.communicationEmail.trim(),
      about: contactState.about.trim(),
    },
    images: images,
  };

  if (businessState.businessType === "single") {
    formData = {
      ...formData,
      locationInfo: {
        state: locationState.state,
        city: locationState.city,
        area: locationState.area,
        addrLine1: locationState.addrLine1.trim(),
        addrLine2: locationState.addrLine2.trim(),
        landmark: locationState.landmark.trim(),
        zipcode: locationState.zipcode.trim(),
      },
    };
  }

  const stepIncrement = () => {
    console.log("Step Increment.");
    if (step === 6) {
      return;
    } else {
      setStep(step + 1);
      console.log(step);
    }
  };

  const stepDecrement = () => {
    console.log("Step Decrement.");
    if (step === 1) {
      return;
    } else {
      setStep(step - 1);
      console.log(step);
    }
  };

  const componentHandler = () => {
    switch (step) {
      case 1:
        return (
          <UserInfo
            step={step}
            stepIncrement={stepIncrement}
            stepDecrement={stepDecrement}
            userState={userState}
            setUserState={setUserState}
          />
        );
      case 2:
        return (
          <BusinessInfo
            step={step}
            stepIncrement={stepIncrement}
            stepDecrement={stepDecrement}
            businessState={businessState}
            setBusinessState={setBusinessState}
          />
        );
      case 3:
        return (
          <ContactInfo
            step={step}
            stepIncrement={stepIncrement}
            stepDecrement={stepDecrement}
            contactState={contactState}
            setContactState={setContactState}
          />
        );
      case 4:
        if (businessState.businessType === "single") {
          return (
            <LocationInfo
              step={step}
              stepIncrement={stepIncrement}
              stepDecrement={stepDecrement}
              locationState={locationState}
              setLocationState={setLocationState}
            />
          );
        } else {
          setStep(step + 1);
        }
      case 5:
        return (
          <Images
            step={step}
            stepIncrement={stepIncrement}
            stepDecrement={stepDecrement}
            images={images}
            setImages={setImages}
          />
        );
      case 6:
        return (
          <Setting
            step={step}
            stepIncrement={stepIncrement}
            stepDecrement={stepDecrement}
            statusState={statusState}
            setStatusState={setStatusState}
            formData={formData}
          />
        );
      default:
        return (
          <UserInfo
            step={step}
            stepIncrement={stepIncrement}
            stepDecrement={stepDecrement}
            userState={userState}
            setUserState={setUserState}
          />
        );
    }
  };

  return (
    <Fragment>
      <div className="row" style={{ margin: "auto" }}>
        <div className="col-2">
          <ul className="list-group">
            <li>
              <Link className="list-group-item" to="#!">
                Manage
              </Link>
            </li>
            <li>
              <Link className="list-group-item" to="#!">
                Create
              </Link>
            </li>
            <li>
              <Link className="list-group-item" to="#!">
                Trash
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-10">
          <div
            style={{
              backgroundColor: "#2ab4c0",
            }}
          >
            <h4 style={{ color: "white", paddingLeft: "20px", margin: "0px" }}>
              <strong>Create</strong>
            </h4>
          </div>

          <div style={{ borderStyle: "solid", borderColor: "#2ab4c0" }}>
            <div className="row" style={{ width: "100%" }}>
              <div className="col-2"></div>
              <div className="col-10">
                <br />
                <form>{componentHandler(step)}</form>
              </div>
            </div>
            <br />
          </div>
          <div
            style={{
              backgroundColor: "#2ab4c0",
              height: "30px",
            }}
          ></div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateMerchant;
