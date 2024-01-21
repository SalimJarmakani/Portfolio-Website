import React from "react";
import IdSLogo from "../../images/idssolutions_logo.jpg";
import { Timeline } from "../timeline/Timeline";

export const Professional = () => {
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
        <div className="row">
          <Timeline />
        </div>
      </div>
    </div>
  );
};
