import React from "react";

import "../style/navbar.css";

import { NavLink } from "react-router-dom";

//Ikony
import { LuHome } from "react-icons/lu";
import { LuWarehouse } from "react-icons/lu";
import { IoDocumentsOutline } from "react-icons/io5";
import { MdOutlineHelpOutline } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          {" "}
          <NavLink
            className={`${({ isActive }) =>
              isActive ? "active" : "inactive"} menuElement`}
            to="/"
          >
            <LuHome />
            <span className="iconTextGap">HomePage</span>
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={`${({ isActive }) =>
              isActive ? "active" : "inactive"} menuElement`}
            to="/stock"
          >
            <LuWarehouse />
            <span className="iconTextGap">Stany Magazynowe</span>
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={`${({ isActive }) =>
              isActive ? "active" : "inactive"} menuElement`}
            to="/documents"
          >
            <IoDocumentsOutline />{" "}
            <span className="iconTextGap">Dokumenty Magazynowe</span>
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={`${({ isActive }) =>
              isActive ? "active" : "inactive"} menuElement`}
            to="/Help"
          >
            <MdOutlineHelpOutline />
            <span className="iconTextGap">Help</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
