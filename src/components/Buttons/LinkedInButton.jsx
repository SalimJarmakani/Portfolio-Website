import React from "react";
import "../Buttons/LinkedInButtonCss.css";
export const LinkedInButton = () => {
  const linkedInRedirect = () =>
    window.open("https://www.linkedin.com/in/salim-jarmakani-b14992269/");
  return (
    <>
      <button className="LinkedInButton" onClick={linkedInRedirect}>
        <svg
          height="50"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
          width="50"
          x="0"
          xmlns="http://www.w3.org/2000/svg"
          y="0"
        >
          <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
        </svg>
        <span className="text">Salim</span>
        <div class="LinkedInTooltip">See my profile!</div>
      </button>
    </>
  );
};
