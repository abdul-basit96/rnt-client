import React, { useEffect } from "react";
import "./style.css";
import Header from "../../Containers/Header";
import FaqData from "./faqs.json";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <div className="container-fluid faq-container mb-5">
        <div className="row">
          <div className="col-md-10 mx-auto text-center mt-5">
            <h1 className="mb-4">FAQs</h1>
            <div className="text-left mt-5 mb-5">
              {FaqData.map((data, index) => {
                return (
                  <>
                    <h5
                      className="faq-question mb-4"
                      data-toggle="collapse"
                      href={"#collapseExample" + index}
                      aria-expanded="false"
                    >
                      {data.question}
                    </h5>
                    <div
                      className="collapse text-justify"
                      id={"collapseExample" + index}
                    >
                      <div className="card card-body">{data.answer}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
