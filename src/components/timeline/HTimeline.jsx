import React from "react";
import { Chrono } from "react-chrono";
import "./timeline.css";
export default function HTimeline({ Events }) {
  return (
    <div className="timeline-div">
      <Chrono
        items={Events}
        enableBreakPoint
        verticalBreakPoint={400}
        mode="HORIZONTAL"
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
