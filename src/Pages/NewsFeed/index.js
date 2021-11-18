import React from 'react';
import { NavLink } from 'react-router-dom';
import NewsCard from '../../Components/NewsCard';
import Header from '../../Containers/Header';
import './style.css';

const NewsFeed = () => {
    const newData = [
        {
            title: "Cleanie Awards Honor SEIA’s Commitment to Diversity",
            image: "smart_light"
        },
        {
            title: "U.S. Trade Court Reinstates Bifacial Tariff Exclusion",
            image: "solar_street"
        }
    ]
    return (
        <>
        <Header />
            <div className="container-fluid mt-5 newsfeed-div">
            <h1 className="m-5 text-center">News & Blogs</h1>
                <div className="row justify-content-center">
                    {newData.map(news => (
                        <div className="col-md-3 mt-3">
                        <NavLink to="/news/123">
                            <NewsCard image={news.image} title={news.title} />
                        </NavLink>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default NewsFeed;