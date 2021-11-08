import React, { useEffect } from "react";
import "./style.css";
import Header from "../../Containers/Header";
import ServiceContainer from "../../Containers/ServiceContainer";
import ServiceCard from "../../Components/ServiceCard";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const serviceTitle = [
    "Solar Street Lights",
    "Smart Street Lights",
    // "Bio-gas Plants",
    "Solar Irrigation Pumping",
  ];
  const serviceDetail = [
    "Illuminate your streets at night using sunlight",
    "LED based street lights with a light sensor",
    // "Helps nature generate energy for you",
    "Pump water from beneath the Earth's surface to fulfill your needs",
  ];
  const serviceImg = ["solar_street", "smart_light", "pump"];
  let i = -1;
  return (
    <>
      <Header />
      <ServiceContainer>
        {serviceTitle.map((cardTitle) => {
          i++;
          return (
            <ServiceCard
              title={cardTitle}
              detail={serviceDetail[i]}
              src={serviceImg[i]}
              size="70%"
              margin="10px"
            />
          );
        })}
      </ServiceContainer>
    </>
  );
};

export default Services;
