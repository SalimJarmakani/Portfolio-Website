import React from "react";
import "./Widget.css";
import { Title } from "../Title/Title";
import { LinkedInButton } from "../Buttons/LinkedInButton";
import "../Title/title.css";

const Widget = () => {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-4">
            <div className="card coolCard" style={{ borderRadius: "15px" }}>
              <div className="card-body text-center bgCoolCard">
                <div className="mt-3 mb-4">
                  <img
                    src={require("../../images/Salim_profile.jpg")}
                    className="rounded-circle img-fluid"
                    style={{ width: "100px" }}
                    alt="User Avatar"
                  />
                </div>
                <h4 className="mb-2">Salim Jarmakani</h4>
                <p className="text-muted mb-4">
                  Software Developer <span className="mx-2">|</span>{" "}
                  <a href="https://github.com/SalimJarmakani">Github</a>
                </p>
                <div className="mb-4 pb-2">
                  <LinkedInButton />
                </div>
                {/* <button
                  type="button"
                  className="btn btn-primary btn-rounded btn-lg"
                >
                  Message now
                </button> */}
                <a id="scroll1" href="#technical">
                  <button id="skillsButton">
                    <span>Technical Skills</span>
                    <i></i>
                  </button>
                </a>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <p className="mb-2 h5">1+</p>
                    <p className="text-muted mb-0">Years of Experience</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-2 h6">Computer Science Degree</p>
                    <p className="text-muted mb-0 ">
                      American university Of Beirut
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 h5">5+</p>
                    <p className="text-muted mb-0">Fullstack Projects</p>
                  </div>
                </div>
              </div>
              <div class="blob"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widget;
