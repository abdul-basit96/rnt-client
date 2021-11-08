import React from "react";
import "./style.css";
import UserHelpCard from "../UserHelpCard";

const UserHelp = () => {
  return (
    <>
      <div className="container-fluid pb-5 userhelp-container">
        <div className="row">
          <div className="col-md-9 mx-auto">
            <div className="row">
              <UserHelpCard
                src="price"
                title="FAIR PRICES FOR EVERYONE"
                detail="After the process, they will communicate"
              />
              <UserHelpCard
                src="chat"
                title="WE WON'T LEAVE YOU HANGING"
                detail="We will answer your call in less than 2 minutes of you calling"
              />
              <UserHelpCard
                src="go-green"
                title="100% GREEN"
                detail="Our energy solutions will help you reduce your carbon foot print"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHelp;
