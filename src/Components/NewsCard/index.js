import React from 'react';
import './style.css';

const NewsCard = ({image, title}) => {
    return (
        <>
            <div className="card">
                <img src={require("../../Images/" + image + ".png")} height="230px" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <hr />
                    <div className="d-flex">
                        <div className="admin-profile">
                        </div>
                        <h6 className="mt-2 ml-2">Rnt Admin</h6>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewsCard;