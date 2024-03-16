import React from "react";
import { Chrono } from "react-chrono";
import "./timeline.css";
export default function HTimeline({ Events }) {
  return (
    <div style={{ textAlign: "center" }}>
      <Chrono
        items={Events}
        enableBreakPoint
        verticalBreakPoint={900}
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
