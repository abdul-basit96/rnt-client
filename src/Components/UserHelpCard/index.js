import React from "react";
import "./style.css";

const UserHelpCard = (props) => {
  return (
    <>
      <div className="col-md-4 mt-5 text-center">
        <img
          src={require("../../Images/" + props.src + ".png")}
          style={{ width: "40%" }}
        />
        <div className="mt-3 userhelpcard-heading">{props.title}</div>
        <div>{props.detail}</div>
      </div>
    </>
  );
};

export default UserHelpCard;
