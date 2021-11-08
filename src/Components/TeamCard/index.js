import React from "react";
import "./style.css";

const TeamCard = (props) => {
  return (
    <>
      <div className="col-md-3 col-sm-6 col-6 m-4 mt-5  team-card">
        <div className="card-info">
          <div className="card-name">{props.name}</div>
          <div className="card-prof">{props.prof}</div>
          <div className="card-divider"></div>
          <div className="card-bio">{props.bio}</div>
          <img
            src={require("../../Images/" + props.src + ".jpg")}
            className="card-photo"
          />
        </div>
      </div>
    </>
  );
};

export default TeamCard;
