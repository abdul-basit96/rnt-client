import React, { useEffect } from "react";
import "./style.css";
import Header from "../../Containers/Header";

const ContactForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Header />
      <div className="container-fluid bg-white mt-5 py-4 ">
        <div className="row">
          <div className="col-md-8 mx-auto contact-form p-5">
            <div className="form-heading">
              <h1>Contact us</h1>
              <h6 className="mt-3 ml-5 mr-5">
                Do you have any questions? Please do not hesitate to contact us
                directly. Our team will come back to you within a matter of
                hours to help you.
              </h6>
            </div>
            <form action="sendmail.php" method="POST">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="inputSubject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputSubject"
                  name="subject"
                  placeholder="Message related to "
                  required
                />
              </div>
              <div className="form-group">
                <label for="inputMessage">Message</label>
                <textarea
                  type="text"
                  col="6"
                  required
                  className="form-control"
                  id="inputMessage"
                  name="message"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div className="btn-div">
                <button type="submit" class="btn btn-theme">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
