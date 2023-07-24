import React, { useRef } from "react";
import Navigation from "./Navigation";
import HamburgerButton from "./HamburgerButton";

function AppHeader() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
      <div className="header-name">
        <p>
          ADVENTURE
          <br />
          IN INDONESIAN
          <br />
          SPORTS
          <br />
        </p>
      </div>
      <Navigation
        showNavbar={showNavbar}
        hideNavbar={hideNavbar}
        ref={navRef}
      />
      <HamburgerButton showNavbar={showNavbar} />
    </header>
  );
}

export default AppHeader;
