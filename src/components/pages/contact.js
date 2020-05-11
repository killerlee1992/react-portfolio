import React from "react";
import ContactPagePicture from "../../../static/assets/images/auth/contact/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column-img"
        style={{
          background: "url(" + ContactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: -50,
          // backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">601-337-4483</div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">killerlee1992@gmail.com</div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Picayune, MS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
