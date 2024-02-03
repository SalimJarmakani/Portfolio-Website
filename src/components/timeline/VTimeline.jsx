import React from "react";
import { Chrono } from "react-chrono";
import "./timeline.css";
export default function VTimeline({ Events }) {
  return (
    <div className="timeline-div">
      <Chrono
        items={Events}
        mode="VERTICAL"
        theme={{
          primary: "grey",
          secondary: "black",
          cardBgColor: "grey",
          titleColorActive: "white",
          titleColor: "black",
        }}
      />
    </div>
  );
}
