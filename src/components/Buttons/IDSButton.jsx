import React from "react";
import "../Buttons/IDSButtonCss.css";
const IDSButton = () => {
  const IDSRedirect = () => window.open("https://www.ids.com.lb/");
  return (
    <button onClick={IDSRedirect} className="IDSButton">
      Integrated Digital Systems
    </button>
  );
};

export default IDSButton;
