import React from "react";
import { NavLink } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";
const Header = () => {
  return (
    <div>
      <nav>
        <ul className="container">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"/suggested"}>suggested</NavLink>
          </li>
          <li>
            <NavLink to={"/myCourses"}>my courses</NavLink>
          </li>
          <li>
            <NavLink to={"/search"}>Search</NavLink>
          </li>
          <li>
            <NavLink to={"/contactUs"}>Contact us</NavLink>
          </li>
          <HeaderLogin />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
