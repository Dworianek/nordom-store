import React from "react";

import "../style/navbar.css";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
          >
            HomePage
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/stock"
          >
            Stany Magazynowe
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/documents"
          >
            Dokumenty Magazynowe
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/Help"
          >
            Help
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
