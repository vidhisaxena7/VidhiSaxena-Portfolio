import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">
            <a href="https://www.facebook.com/vidhi.saxena.1291/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/vidhisaxena_7/?hl=en">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://github.com/vidhisaxena7/vidhi-saxena7.git">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/vidhi-saxena-ap07/">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>  
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello,I'M <span className="highlighted-text">Vidhi Saxena</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                  knack of building applications with front end and back end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
              <button className="btn primary-btn" 
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                  Hire Me
              </button>
              <a href='VidhiSaxena_Resume.pdf' download="VidhiSaxena_Resume.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
              </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
