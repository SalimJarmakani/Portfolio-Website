import React, { useState, useEffect } from "react";
import IdSLogo from "../../images/idssolutions_logo.jpg";
import HTimeline from "../timeline/HTimeline";
import VTimeline from "../timeline/VTimeline";

const Events = [
  {
    title: "June 2023",
    cardTitle: "Internship",
    cardDetailedText:
      "Began Internship As An Asp.net core Back-End Developer in Intergrated Digital Systems",
    url: "https://www.ids.com.lb/",
  },
  {
    title: "August 2023",
    cardTitle: "Joined the Team",
    cardDetailedText:
      "After a successful Internship I was Offered A Job as Full-Stack Developer specializing in C# & Sql Server & Javascript Technologies",
  },
  {
    title: "December 2023",
    cardTitle: "Cloud 9 Lead Developer",
    cardDetailedText:
      "Assuming the Lead Developer position at Cloud 9 Solutions was an exciting opportunity to steer the development of our CRM platform, with a particular focus on ASP.NET Core. Working closely with the team, we crafted a robust solution, blending JavaScript, C#, and SQL Server intricacies for optimal performance and seamless functionality.",
    url: "https://cloud9.ids.com.lb/",
  },
];
export const Professional = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");

    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);
  return (
    <div
      id="professionalExpDiv"
      className={`shadow-lg p-3 mb-5 bg-white rounded ${
        isMobile ? "w-90" : "w-50"
      }  ms-auto me-auto`}
    >
      <div className="row">
        <h1 className="text-dark">Professional Experience</h1>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-md-6">
          <img
            className=" ms-auto me-auto img-thumbnail h-75"
            src={IdSLogo}
            alt=""
          />
        </div>
        <div className="col-md-6 mt-auto mb-auto">
          <p className="fs-5">
            Experienced Full Stack Developer | Proficient in{" "}
            <span className="badge fs-6" style={{ color: "#6746da" }}>
              C# ASP.NET Core
            </span>
            ,{" "}
            <span className="badge fs-6" style={{ color: "#148aca" }}>
              SQL Server
            </span>
            , and{" "}
            <span className="badge fs-6" style={{ color: "#cfbb1b" }}>
              JavaScript
            </span>{" "}
            | Specializing in Crafting Complex Software Solutions at{" "}
            <span className="badge fs-5" style={{ color: "#4078b6" }}>
              Integrated Digital Systems
            </span>
          </p>
        </div>
      </div>
      <div className="timeline-div">
        {isMobile ? (
          <VTimeline Events={Events} />
        ) : (
          <HTimeline Events={Events} />
        )}
      </div>
    </div>
  );
};
