import React from 'react';
import './style.css';
import Header from "../../Containers/Header";
import { FaMapMarkerAlt, FaCalendarAlt, FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const ProjectDetail = () => {
    const projectImages = [
        'project_sample',
        'project_sample2',
        'project_sample3'
    ];
    const [image, setImage] = React.useState(projectImages[0]);
    const [imageIndex, setImageIndex] = React.useState(0);
    const nextImage = () => {
        let newIndex = imageIndex;
        newIndex++;
        if(newIndex === projectImages.length){
            newIndex = 0;
        }
        setImageIndex(newIndex);
        setImage(projectImages[newIndex]);
    }
    const previousImage = () => {
        let newIndex = imageIndex;
        newIndex--;
        if(newIndex < 0){
            newIndex = projectImages.length - 1;
        }
        setImageIndex(newIndex);
        setImage(projectImages[newIndex]);
    }
    return (
        <>
            <Header />
            <div className="container mt-3 project-detail-div">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="img-div">
                            <FaArrowCircleLeft className="leftButton" color="white" onClick={() => previousImage()} />
                            <img width="100%" src={require("../../Images/" + image + ".jpg")} alt="project" />
                            <FaArrowCircleRight className="rightButton" color="white" onClick={() => nextImage()} />
                        </div>
                        <div className="desc-div p-3">
                            <div className="desc-top-div d-flex  justify-content-between">
                                <h6><strong>16.2kW Grid-Tied Solar System</strong></h6>
                                <div className="desc-location-div d-flex">
                                    <div className="d-flex mr-3">
                                        <FaMapMarkerAlt />
                                        <p className="ml-1">Islamabad</p>
                                    </div>
                                    <div className="d-flex">
                                        <FaCalendarAlt />
                                        <p className="ml-1">August 29, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <p>Agence web à taille humaine et collaborative, nous partageons la même vision : grandir ensemble en réalisant des projets qui nous passionnent et nous rassemblent. Agence web à taille humaine et collaborative, nous partageons la même vision : grandir ensemble en réalisant des projets qui nous passionnent et nous rassemblent. Agence web à taille humaine et collaborative, nous partageons la même vision : grandir ensemble en réalisant des projets qui nous passionnent et nous rassemblent</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProjectDetail;