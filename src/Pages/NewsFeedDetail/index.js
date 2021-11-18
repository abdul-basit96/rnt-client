import React from 'react';
import Header from '../../Containers/Header';
import './style.css';

const NewsFeedDetail = () => {
    return (
        <>
            <Header />
            <div className="container-fluid mt-5 newsfeed-detail-div">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h3>Cleanie Awards Honor SEIA’s Commitment to Diversity</h3>
                        <p className="para">The Smart Way to Dress Baby with Sustainable Clothing
                            10 tips from UpChoose to go green in a cost-effective way.
                            At UpChoose, we regularly talk about the importance of picking the right fabrics to put on our children's skin.
                            Here's a summary of our learnings in 10 key tips to dress your baby in an adorable and sustainable way.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsFeedDetail;