import React from "react";
import "./style.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SubmitForm = (props) => {
  props.event.preventDefault();
};
const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5 mb-5">
          <div className=" mt-5 mb-5 col-md-8 text-center mx-auto">
            <h1>Only 2 minutes to switch</h1>
            <h5>& we will take care of everything else</h5>

            <NavLink
              className="text-decoration-none footer-navlink"
              to="/contact"
            >
              <button type="button" class="btn btn-theme mt-4">
                GET A QUOTE
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container-fluid p-5 footer-ul-container">
        <div className="row">
          <div className="col-md-4 ml-auto align-self-center">
            <h6>
              <strong>Subscribe to Renewables & Technologies via Email</strong>
            </h6>
            <div>
              <form
                className="mt-3 form-inline"
                onSubmit={(event) => {
                  event.preventDefault();
                  event.target.email.value = "";
                  alert(
                    "Thanks for subscribing us. If your enter valid email, we will keep you UpToDate."
                  );
                }}
              >
                <div className="form-group mx-sm-3 mb-2">
                  <input
                    type="email"
                    className="form-control"
                    id="inputFooterEmail"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary mb-2">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-end">
            <ul className="mr-5 footer-links-list">
              <li>
                <NavLink
                  className="text-decoration-none footer-navlink"
                  to="/"
                  onClick={(event) => {
                    event.preventDefault();
                    alert("No post is available now. We will hire soon.");
                  }}
                >
                  WORK WITH US
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none footer-navlink"
                  to="/privacy"
                >
                  PRIVACY POLICY
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none footer-navlink"
                  to="/terms"
                >
                  TERMS & CONDITIONS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none footer-navlink"
                  to="/contact"
                >
                  CONTACT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none footer-navlink"
                  to="/faq"
                >
                  FAQs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid end-container">
        <dv className="row">
          <div className="col-md-12 mt-3">
            <div className="d-flex justify-space-between">
              <div>© Renewables & Technologies</div>
              <ul className="social-icons d-flex ml-auto">
                <li>
                  <a
                    href="https://www.facebook.com/Renewables-Technologies-1581338165331224"
                    target="_blank"
                  >
                    <FaFacebookF className="social-img" color="white" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/rewewables.n.technologies/"
                    target="_blank"
                  >
                    <FaInstagram className="social-img" color="white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </dv>
      </div>
    </>
  );
};

export default Footer;
