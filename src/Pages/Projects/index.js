import React, { useEffect } from "react";
import "./style.css";
import Header from "../../Containers/Header";
import ProjectCard from "../../Components/ProjectCard";

const Projects = () => {
  const projectImages = [
    'project_sample',
    'project_sample2',
    'project_sample3'
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <div className="container-fluid projects-div mt-5">
        <div className="row justify-content-center">
          {projectImages.map(image => (
            <ProjectCard image={image} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;
