import React from "react";
import "./style.css";
import ServiceCard from "../../Components/ServiceCard";

const ServiceContainer = (props) => {
  return (
    <>
      <div className="container-fluid service-container pb-5">
        <div className="row">
          <div className="col-md-8 mx-auto text-center mt-5">
            <h1 className="mb-4">Our Services</h1>
            <h5>
              Few energy solution providers can match the industry experience,
              legal skill, technical breadth and business knowledge of
              Renewables & Technologies.
            </h5>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-8 mx-auto text-center mt-5">
            <div className="row justify-content-center">
              <ServiceCard
                title="Home Automation"
                detail="The present & future of all home
appliances"
                src="home-automation"
                size="80%"
              />
              <ServiceCard
                title="Solar Solutions"
                detail="For a greener, brighter tomorrow"
                src="solar-solution"
                size="90%"
                margin="27px"
              />
              <ServiceCard
                title="Security Systems"
                detail="Provide safety & security for your
                family"
                src="security-system"
                size="70%"
                margin="10px"
              />
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceContainer;
