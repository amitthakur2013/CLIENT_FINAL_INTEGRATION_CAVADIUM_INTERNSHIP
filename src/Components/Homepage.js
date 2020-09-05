import React, { useEffect, useState } from "react";
import axios from "axios";

import NavMenu from "./NavMenu";
import Trending from "./Trending";
import TopThingsToDo from "./TopThingsToDo";
import Carousel from "./Carousel";
import PopularBrands from "./PopularBrands";

import BannerCarousel from "./BannerCarousel";
function Homepage() {
  const [homepageData, setHomepageData] = useState({
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
      // console.log("allImgs", imgsData);
      const data = {
        adBanner1: [],
        adBanner2: [],
        adBanner3: [],
        introBanner: [],
      };
      imgsData.forEach((item) => {
        data[item.banner].push(item.name);
      });

      setHomepageData(data);
    })();
  }, []);

  return (
    <>
      <div id="wrapper">
        <NavMenu />
        <div className="home_slider">
          <div style={{ minHeight: 10 }}>
            {/* <BannerCarousel imgs={homepageData.adBanner1} /> */}
            <Carousel imgs={homepageData.introBanner} />
            {/* <BannerCarousel imgs={homepageData.introBanner} /> */}
          </div>
        </div>
        <div className="content">
          <Trending />
          <BannerCarousel imgs={homepageData.adBanner1} />
          <TopThingsToDo />
          <BannerCarousel imgs={homepageData.adBanner2} />
          <PopularBrands />
          <BannerCarousel imgs={homepageData.adBanner3} />
        </div>
      </div>
    </>
  );
}

export default Homepage;
