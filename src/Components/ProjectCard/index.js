import React from 'react';
import './style.css';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ProjectCard = (props) => {
    return (
        <div className="col-md-4 mt-2">
            <div className="project-img-div">
                <NavLink to="/project/123">
                    <img className="project-img bg-image hover-zoom" width="100%" height="100%" src={require("../../Images/" + props.image + ".jpg")} alt="project" />
                </NavLink>
            </div>
            <div className="p-3">
                <h6><strong>16.2kW Grid-Tied Solar System</strong></h6>
                <hr />
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <FaMapMarkerAlt />
                        <p className="ml-1">Islamabad</p>
                    </div>
                    <div className="d-flex">
                        <FaCalendarAlt />
                        <p className="ml-1">August 29, 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;