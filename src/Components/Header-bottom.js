import React, { useState } from "react";

import logo from "../assets/logo.png";

const HeaderBottom = () => {
  const [searchVal, setSearchVal] = useState("");
  const [datalist, _] = useState([
    { val: "abc", id: 1 },
    { val: "abccd", id: 2 },
    { val: "abcdef", id: 3 },
    { val: "abcdefsadsd", id: 4 },
    { val: "afsadsd", id: 5 },
  ]);

  return (
    <div className="second-part" style={{ background: "#e0dede" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 col-md-3 col-xs-3">
            <a className="logo fl" href="/">
              <img alt="logo" className="header-logo" src={logo} />
            </a>
          </div>
          <div className="col-md-5 col-sm-6 col-xs-12 ui search">
            <div className="input-group fl ui icon input">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input
                type="search"
                list="serchListData"
                value={searchVal}
                className="form-control prompt"
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Search Here"
                autoComplete="on"
              />
              <datalist id="serchListData">
                {datalist.map((item) => (
                  <option value={item.val} key={item.id} />
                ))}
              </datalist>
              <span className="input-group-btn">
                <input
                  className="btn btn-default search-btn"
                  type="submit"
                  value="SEARCH"
                />
              </span>
            </div>
            <div className="results"></div>
          </div>

          {/* <div className="col-md-4 col-sm-4">
            <ul className="category-btn">
              <li className="category_menu arround-you active">
                <a
                  className="main_menu"
                  style={{ background: "#812b80", border: 0 }}
                  href="https://all4you.co.in/#"
                >
                  Around You
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default HeaderBottom;
