import React, { useEffect, useRef } from "react";
import laptop from "../../images/laptop2-removebg-preview.png";
import db from "../../images/image-removebg-preview.png";
import phone from "../../images/smartphone.png";
import { Slide } from "react-awesome-reveal";
import "./skill.css";

function Skills() {
  return (
    <Slide direction="up" className="mb-5" triggerOnce>
      <div
        className="container"
        id="technical"
        style={{ marginTop: 300, scrollMarginTop: 50 }}
      >
        <div className="row justify-content-md-center ">
          <div className="col-md-4">
            <div className="card h-100 bg-dark ">
              <img
                src={laptop}
                className="card-img-top p-2"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-white">Software developer</h5>
                <p className="card-text text-white">
                  Skilled software developer proficient in OOP, FP, and
                  languages including Java, C#, Python, and JavaScript.
                  Experienced in developing robust applications using diverse
                  programming paradigms. Strong problem-solving abilities and a
                  commitment to delivering high-quality software solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 bg-dark ">
              <img
                src={db}
                className="card-img-top p-2"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-white">BackEnd Engineer</h5>
                <p className="card-text text-white">
                  Proficient in ASP.NET Core, FastAPI, and Node.js for backend
                  development. Strong expertise in building scalable web
                  applications, RESTful APIs, and handling database operations.
                  Skilled in problem-solving and delivering efficient backend
                  solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 bg-dark ">
              <img
                src={phone}
                className="card-img-top p-2"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-white">Mobile Developer</h5>
                <p className="card-text text-white">
                  Skilled in Flutter, Android, Java, and Kotlin for mobile
                  development. Proficient in cross-platform app creation, native
                  Android development, and backend integrations. Strong
                  problem-solving abilities and a focus on delivering
                  high-quality mobile solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default Skills;
