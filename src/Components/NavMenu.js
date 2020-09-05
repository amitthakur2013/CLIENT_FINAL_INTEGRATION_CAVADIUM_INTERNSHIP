import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const NavMenu = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async function () {
      const {
        data: { categories },
      } = await axios.get("http://localhost:3124/api/category/all");
      // console.log("cat", categories);
      setCategories(categories);
    })();
    // console.log("zz");
    //TODO add link to categoriees
  }, []);
  return (
    <div className="container">
      <div className="menu">
        <ul className="menu-list text-center">
          {categories.map((category) => (
            <li key={category._id}>
              <Link to={`/merchants/${category._id}`}>
                <div className="menu-item">
                  <div className="icon-img">
                    <img
                      id="logo-img"
                      src={`http://localhost:3124/category/${category.img}`}
                      alt={category.name}
                    />
                  </div>
                  <p className="heading">{category.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
