import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#book">Books</a>
      </li>
    </>
  );
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div>
      <div className="navbar bg-cyan-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
              <div className="sm:block lg:hidden ">
                <div className="form-control w-52">
                  <label className="cursor-pointer label">
                    <span className="label-text"></span>
                    <input
                      type="checkbox"
                      className="toggle toggle-secondary "
                      onChange={handleToggle}
                    />
                  </label>
                </div>
              </div>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Product Flow</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="sm:hidden lg:block ">
            <div className="form-control w-52">
              <label className="cursor-pointer label">
                <span className="label-text"></span>
                <input
                  type="checkbox"
                  className="toggle toggle-secondary "
                  onChange={handleToggle}
                />
              </label>
            </div>
          </div>
          <a className="btn" href="register">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
