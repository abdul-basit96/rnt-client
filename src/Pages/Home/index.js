import React, { useEffect } from "react";
import "./style.css";
import HomeHeader from "../../Containers/HomeHeader";
import UserHelp from "../../Components/UserHelp";
import ServiceContainer from "../../Containers/ServiceContainer";
import HowItWorks from "../../Containers/HowItWorks";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <HomeHeader />
      <ServiceContainer />
      <HowItWorks />
      <UserHelp />
    </>
  );
};

export default Home;
