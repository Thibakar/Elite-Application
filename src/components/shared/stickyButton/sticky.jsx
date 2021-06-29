import React from "react";

import Share from "../../../assets/images/shareIcon.svg";
import Facebook from "../../../assets/images/fecebookIcon.svg";
import Whatsapp from "../../../assets/images/whatsappIcon.svg";
import "./sticky.scss";

export default function Sticky() {
  return (
    <div>
      <div className="icon-bar">
        <a href="https://www.share.com" className="facebook">
          <img src={Share} alt="share" />
        </a>

        <a href="https://www.whatsappweb.com" className="whatsapp">
          <img src={Whatsapp} alt="whatsapp" />
        </a>
        <a href="https://www.facebook.com/" className="facebook">
          <img src={Facebook} alt="fb" />
        </a>
      </div>
    </div>
  );
}
