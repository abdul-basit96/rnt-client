import React, { useEffect } from "react";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div data-aos="fade-down" className="col-md-4">
        <img
          src={require("../../Images/" + props.src + ".png")}
          style={{
            width: props.size,
            marginTop: props.margin,
            marginBottom: props.margin,
          }}
        />
        <h5 className="mt-4">
          <strong>{props.title}</strong>
        </h5>
        <h6>{props.detail}</h6>
      </div>
    </>
  );
};

export default ServiceCard;
