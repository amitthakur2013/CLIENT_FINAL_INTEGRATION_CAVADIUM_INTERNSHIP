import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Filters from "./Filters";
import { withRouter } from "react-router-dom";
import VendorCard from "./VendorCard";
import BannerCarousel from "./BannerCarousel";

const DealsPage = ({ match }) => {
  const [merchants, setMerchants] = useState([]);
  const [bannerImgs, setBannerImgs] = useState({
    adBanner1: [],
    adBanner2: [],
    adBanner3: [],
    introBanner: [],
  });
  useEffect(() => {
    (async function () {
      const {
        data: { imgsData },
      } = await axios.get("http://localhost:3124/api/homepage");
      const { data: merchants } = await axios.get(
        `http://localhost:3124/api/merchant/${match.params.id}`
      );
      console.log("a", merchants);
      setMerchants(merchants);
      const data = {
        adBanner1: [],
        adBanner2: [],
        adBanner3: [],
        introBanner: [],
      };
      imgsData.forEach((item) => {
        data[item.banner].push(item.name);
      });
      setBannerImgs(data);
    })();
  }, []);

  return (
    <>
      <div id="wrapper">
        <div className="container">
          <div className="menu">
            <div className="row" style={{ marginTop: "15px" }}>
              <div className="col-sm-4 ">
                {/* <div className="left-side"> */}
                <Filters />
                {/* </div> */}
              </div>
              <div className="col-sm-8 ">
                <div className="row">
                  {/* {!merchants.length && <h1>No merchants available</h1>} */}
                  {merchants.map((merchant) => (
                    // <Link to={`/vendor`} >
                    <VendorCard key={merchant._id} merchant={merchant} />
                    // </Link>
                  ))}
                  {/* <VendorCard />
                  <VendorCard /> */}
                </div>
              </div>
            </div>
            {/* <div className="content"> */}
            {/* <div className="row" style={{ marginTop: "50px" }}> */}
            <div className="col-12">
              <BannerCarousel imgs={bannerImgs.adBanner1} />
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(DealsPage);
