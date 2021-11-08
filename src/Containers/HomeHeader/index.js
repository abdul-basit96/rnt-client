import React from "react";
import "./style.css";
import HomeLandingScreen from "../../Components/HomeLandingScreen";
import Navbar from "../../Components/Navbar";

const HomeHeader = () => {
  return (
    <>
      <div className="container-fluid landing-container">
        <div className="row mb-4">
          <div className="col-md-10 mx-auto">
            <Navbar color="#1c4f84" />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-10 mx-auto">
            <HomeLandingScreen
              title="Making energy greener, simpler and cheaper"
              detail="Cost effective renewable solutions for home and offices."
              src="main"
              imgClass="animated-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
