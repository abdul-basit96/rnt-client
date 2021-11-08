import React, { useEffect } from "react";
import "./style.css";
import HomeHeader from "../../Containers/HomeHeader";
import ProcedureCard from "../../Components/ProcedureCard";
import UserHelp from "../../Components/UserHelp";
import ServiceContainer from "../../Containers/ServiceContainer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const procedureCardTitle = [
    "Book an appointment",
    "Arrange a visit",
    "Assessment",
    "Results",
    "Time to go green!",
  ];
  const procedureCardDetail = [
    "Book an appointment with our top-rated consultant",
    "Our staff members will visit your premises to understand your requirements",
    "Our staff will run a feasibility analysis on the site as per the requirement you set",
    "After the process, they will communicate the best possible solution",
    "The team will start implementing the changes on the site and install new infrastructure",
  ];
  const procedureCardImg = [
    "appointment",
    "visit",
    "assessment",
    "results",
    "time-to-green",
  ];
  let i = -1;
  return (
    <>
      <HomeHeader />
      <ServiceContainer />
      <div className="container-fluid  mb-5  mt-5">
        <div className="row">
          <div className="col-md-10 mx-auto text-center">
            <h1>How it works?</h1>
            <div className="row justify-content-center">
              {procedureCardTitle.map((cardTitle) => {
                i++;
                return (
                  <ProcedureCard
                    title={cardTitle}
                    detail={procedureCardDetail[i]}
                    src={procedureCardImg[i]}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <UserHelp />
    </>
  );
};

export default Home;
