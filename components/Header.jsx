import React, { Fragment, useRef } from "react";
import { Link } from "next/link";
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
        <a href="/">
          <h1 className="logo"> Ezie Innocent</h1>
        </a>
        <div className="desktopnav">
          {links.map((link) => {
            return (
              <ul key={link.id}>
                <a onClick={handleClick} href={link.url} key={link.url}>
                  {" "}
                  {link.text}
                </a>
              </ul>
            );
          })}
        </div>
        <Mobile handleClick={handleClick} links={links} />
      </nav>
    </>
  );
};

export default Header;

export const Mobile = ({ handleClick, links }) => {
  const ref = useRef();

  const handleClose = () => {
    if (ref.current.style.display === "none") {
      ref.current.style.display = "flex";
    } else {
      ref.current.style.display = "none";
    }
  };

  //   var MenuItems = document.getElementById("MenuItems");
  //   MenuItems.style.maxHeight = "0px";
  //   function menutoggle() {
  //     if (MenuItems.style.maxHeight == "0px") {
  //       MenuItems.style.maxHeight = "200px";
  //     } else {
  //       MenuItems.style.maxHeight = "0px";
  //     }
  //   }

  return (
    <div className="mobile">
      <div onClick={handleClose} className="toggle"></div>

      <ul ref={ref} onClick={handleClose}>
        {links.map((link) => {
          return (
            <Fragment key={link.id}>
              <a onClick={handleClick} href={link.url} key={link.url}>
                {link.text}
              </a>
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};
