import React, { useState, useEffect } from "react";
import IdSLogo from "../../images/idssolutions_logo.jpg";
import VTimeline from "../timeline/VTimeline";
import HTimeline from "../timeline/HTimeline";

const Events = [
  {
    title: "Started InternShip At Ids",
    cardTitle: "Internship",
    cardDetailedText:
      "Began Internship As An Asp.net core Back-End Developer in Intergrated Digital Systems",
    url: "https://www.ids.com.lb/",
  },
  {
    title: "Joined The Team As A Full-Stack Developer",
    cardTitle: "Joined the Team",
    cardDetailedText:
      "After A successfull Internship I was Offered A Job as Full-Stack Developer Using C# & Sql Server & Javascript Technologies",
  },
  {
    title: "Became the Lead Developer On Cloud 9",
    cardTitle: "Joined the Team",
    cardDetailedText:
      "Stepping into the role of Lead Developer for Cloud 9 Solution was a thrilling opportunity to lead the charge in crafting and maintaining this robust CRM platform. With a blend of JavaScript, C# (ASP.NET Core), and SQL Server wizardry, I brought our vision to life, ensuring seamless functionality and top-notch performance.",
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
    <div className="shadow-lg p-3 mb-5 bg-white rounded w-75 ms-auto me-auto">
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
            Experienced Full Stack Developer | Proficient in C# ASP.NET Core,
            SQL Server, and JavaScript | Specializing in Crafting Complex
            Software Solutions at Integrated Digital Systems
          </p>
        </div>
      </div>
      <HTimeline Events={Events} />
    </div>
  );
};
