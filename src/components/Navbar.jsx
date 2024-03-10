import React, { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    const onScroll = () => {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Emi.
        </a>

        <div className="bx bx-menu" id="menu-icon" onClick={handleClick}>
          <i></i>
        </div>

        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
