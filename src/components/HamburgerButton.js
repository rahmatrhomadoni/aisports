import React from "react";
import { FaBars } from "react-icons/fa";

export default function HamburgerButton({ showNavbar }) {
  return (
    <>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </>
  );
}
