import React from "react";

export const Project = ({ projectData }) => {
  const { title, description, imagePath, github, tech } = projectData;

  return (
    <div className="col-md-4 col-xl-4 col-sm-6 mb-5">
      <div className="bg-white rounded shadow-sm py-5 px-4 ">
        <img
          src={imagePath}
          alt=""
          width="100"
          className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
        />
        <h5 className="mb-0">{title}</h5>
        <span className="small text-uppercase text-muted">{description}</span>
        <ul className="social mb-0 list-inline mt-3 ">
          <li className="list-inline-item ">
            <a href={github} target="_blank" className="social-link">
              <i className="bi bi-github display-6"></i>
            </a>
          </li>
        </ul>
        <div className="d-flex flex-wrap justify-content-start mt-3 ">
          {tech.map((t) => (
            <span className="badge bg-secondary me-3 mt-3 shadow">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
