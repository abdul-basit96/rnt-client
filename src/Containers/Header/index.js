import React from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";

const Header = () => {
  return (
    <>
      <div className="container-fluid pb-2 header-container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Navbar color="white" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
