import React, { useEffect } from "react";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const HomeLandingScreen = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className="row">
        <div className="col-md-6 pt-5 d-flex justify-content-center order-md-1 order-lg-1 order-2 flex-column">
          <h1 data-aos="fade-right" className="my-3 main-heading">
            {props.title}
          </h1>
          <h5 data-aos="fade-right" className="my-3 second-heading">
            {props.detail}
          </h5>
          <div className="mt-3">
            <NavLink
              className="text-decoration-none footer-navlink"
              to="/contact"
            >
              <button type="button" class="btn btn-theme">
                GET A QUOTE
              </button>
            </NavLink>
          </div>
        </div>
        <div className="col-md-6 pt-5 order-md-2 order-lg-2 order-1">
          <img
            className={props.imgClass}
            src={require("../../Images/" + props.src + ".png")}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </>
  );
};

export default HomeLandingScreen;
