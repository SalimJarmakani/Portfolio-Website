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
                  Experienced software developer proficient in OOP, FP, skilled
                  in{" "}
                  <span className="badge fs-6" style={{ color: "#f89917" }}>
                    Java
                  </span>
                  ,{" "}
                  <span className="badge fs-6" style={{ color: "#6746da" }}>
                    C#
                  </span>
                  ,{" "}
                  <span className="badge fs-6" style={{ color: "#3872a3" }}>
                    Python
                  </span>
                  , and{" "}
                  <span className="badge fs-6" style={{ color: "#cfbb1b" }}>
                    JavaScript
                  </span>
                  . Utilizing design patterns to craft robust applications
                  across diverse programming paradigms. Strong problem-solving
                  skills with a commitment to high-quality software solutions.
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
                  Proficient in{" "}
                  <span className="badge fs-6" style={{ color: "#6746da" }}>
                    ASP.NET Core
                  </span>
                  , FastAPI, and Node.js for backend development. Strong
                  expertise in building scalable web applications, RESTful APIs,
                  and handling database operations. Skilled in problem-solving
                  and delivering efficient backend solutions.
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
