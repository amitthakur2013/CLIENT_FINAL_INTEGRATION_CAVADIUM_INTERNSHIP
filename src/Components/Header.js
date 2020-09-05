import React, { useState, useEffect } from "react";
import HeaderTop from "./Header-top";
import HeaderBottom from "./Header-bottom";
import HeaderLocation from "./Header-Location";
import axios from "axios";
const Header = (props) => {
  const [location, setLocation] = useState("");
  const [locationsList, setLocationsList] = useState([]);
  const [showChangeLocation, setShowChangeLocation] = useState(true);
  const saveLocation = (location) => {
    setLocation(location);
    localStorage.setItem("location", location);
  };
  useEffect(() => {
    const l = localStorage.getItem("location") || "";
    setLocation(l);
    if (l) setShowChangeLocation(false);
    else setShowChangeLocation(true);

    (async function () {
      const { data } = await axios.get(
        "http://localhost:3124/api/location/all"
      );

      setLocationsList(data);
    })();
  }, []);
  return (
    <header>
      <div className="header">
        {!showChangeLocation ? (
          <>
            <HeaderTop
              location={location}
              setShowChangeLocation={setShowChangeLocation}
            />
            <HeaderBottom />
          </>
        ) : (
          <HeaderLocation
            locationsList={locationsList}
            location={location}
            setLocation={saveLocation}
            setShowChangeLocation={setShowChangeLocation}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
