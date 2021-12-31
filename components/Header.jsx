import React, { Fragment, useRef } from "react";

import { links } from "./Data";

const Header = () => {
  //use this method only if you wana keep the navbar sticky, else its best to just use
  //the simple method
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    console.log(target);
    const location = document.querySelector(target).offsetTop;

    console.log(location);

    window.scrollTo({
      left: 0,
      top: location - 60, //the height of the nav
    });
  };

  return (
    <>
      <nav className="sticky">
        <a to="/">
          <h1 className="logo"> Ezie Innocent</h1>
        </a>
        <div className="desktopnav">
          {links.map((link) => {
            return (
              <ul>
                <a onClick={handleClick} href={link.url} key={link.url}>
                  {" "}
                  {link.text}
                </a>
              </ul>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Header;
