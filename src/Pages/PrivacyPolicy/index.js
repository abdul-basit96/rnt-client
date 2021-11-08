import React, { useEffect } from "react";
import "./style.css";
import Header from "../../Containers/Header";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const questions = [
    "Who is responsible for the data collection on this website?",
    "How do we collect your data?",
    "Data protection",
    "Social media",
    "Changes to This Privacy Policy",
    "Contact us",
  ];
  const answers = [
    "The data collected on this website are processed by the website operator. The operator's contact details can be found in the website's required legal notice.",
    "Some data are collected when you provide it to us. This could, for example, be data you enter on a contact form.",
    "The operators of this website take the protection of your personal data very seriously. We treat your personal data as confidential and in accordance with the statutory data protection regulations and this privacy policy.",
    "Our website includes plugins for the social network like Facebook, Twitter, Instagram. These plugins can be recognized by their logo on our site. ",
    "We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.",
    "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@rntsolar.com",
  ];
  let i = -1;
  return (
    <>
      <Header />
      <div className="container-fluid privacy-container mb-5">
        <div className="row">
          <div className="col-md-10 mx-auto text-center mt-5">
            <h1 className="mb-4">Privacy Policy</h1>
            <div className="text-left mt-5 mb-5">
              {questions.map((question) => {
                i++;
                return (
                  <>
                    <h5>{question}</h5>
                    <div className="mb-4">{answers[i]}</div>
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
export default PrivacyPolicy;
