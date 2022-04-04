import React from "react";
import world from "../images/world-logo.png";

export default function Header() {
  return (
    <div className="header-container">
      <img className="world-logo" src={world} alt="world logo" />
      <h5 className="header-title">my national park journal.</h5>
    </div>
  );
}
