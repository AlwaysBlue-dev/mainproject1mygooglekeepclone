import React from "react";
import logo from "../Logo/logo.png.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="MK" width="200" height="60" />
        <h1>My Keep</h1>
      </div>
    </>
  );
};
export default Header;
