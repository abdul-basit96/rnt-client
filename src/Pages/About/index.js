import React, { useEffect } from "react";
import "./style.css";
import Header from "../../Containers/Header";
import HomeLandingScreen from "../../Components/HomeLandingScreen";
import ProcedureCard from "../../Components/ProcedureCard";
import TeamCard from "../../Components/TeamCard";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mb-5 mt-5">
          <div className="col-md-10 mx-auto">
            <HomeLandingScreen
              title="About Us"
              detail="Renewables and Technologies (Pvt) Ltd is a solar system installation and automation company. We also deal in solar pumping and solar street lights, CCTV surveillance, bio-gas plants, PLCs and microcontrollers, engineering works, import and export and general order supplies."
              src="about"
              imgClass=""
            />
          </div>
        </div>
      </div>
      <div className="container-fluid  mb-5  mt-5">
        <div className="row">
          <div className="col-md-10 mx-auto text-center">
            <div className="row justify-content-center">
              <ProcedureCard
                title="Mission"
                detail="We aim to become one of the leading energy companies in Pakistan by exploring the abundance of clean energy sources in our country and to educate people."
                src="mission"
              />
              <ProcedureCard
                title="Values"
                detail="We are SOLUTIONS oriented, AGILE, take risks, think DIFFERENTLY and pave our own way as a leader in the market. We are DISCIPLINED to think hard, plan well, manage carefully and measure our RESULTS so that we can succeed in a highly competitive environment."
                src="values"
              />
              <ProcedureCard
                title="Vission"
                detail="To bridge the energy gap in our country and provide our customers cost effective solutions by harnessing energy from clean sources and providing energy efficient solutions."
                src="vission"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid team-container mb-5  mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto text-center mt-5">
            <h1 className="mb-4">Our Team</h1>
            <h5>
              We are very glad to introduce our team. Having such a hardworking
              and efficient team is always a key for our success.
            </h5>
          </div>
          <div className="col-md-10 mb-5 mt-3 mx-auto text-center">
            <div className="row justify-content-center">
              <h5 className="mt-5">Comming soon</h5>
              {/* <TeamCard
                name="Elon Musk"
                prof="Co-founder"
                src="elon"
                bio="I'm working in this field from 4 years. I have developed multiple products including Tesla"
              />
              <TeamCard
                name="Jeff Bezoz"
                prof="Co-founder"
                src="jeff"
                bio="I'm working in this field from 4 years. I have developed multiple products including Amazon"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
