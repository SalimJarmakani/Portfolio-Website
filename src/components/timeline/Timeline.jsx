import React from "react";
import timeline from "./timeline.css";
export const Timeline = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md">
          <div
            class="timeline-steps aos-init aos-animate"
            data-bs-aos="fade-up"
          >
            <div class="timeline-step">
              <div
                class="timeline-content"
                data-bs-toggle="popover"
                data-bs-trigger="hover"
                data-bs-placement="top"
                title=""
                data-bs-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div class="inner-circle"></div>
                <p class="h6 mt-3 mb-1">June 2023</p>
                <p class="h6 text-muted mb-0 mb-lg-0">Started Internship</p>
              </div>
            </div>
            <div class="timeline-step">
              <div
                class="timeline-content"
                data-bs-toggle="popover"
                data-bs-trigger="hover"
                data-bs-placement="top"
                title=""
                data-bs-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2004"
              >
                <div class="inner-circle"></div>
                <p class="h6 mt-3 mb-1">Start of August 2023</p>
                <p class="h6 text-muted mb-0 mb-lg-0">
                  Joined the Team As A Full-Stack Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
