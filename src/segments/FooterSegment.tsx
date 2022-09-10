import * as React from "react";
import Interactive from "../components/InteractiveBackground";

function FooterSegment() {
  return (
    <div className="footer" id="tata">
      <Interactive id={"eeeer"}></Interactive>
      <p
        style={{
          position: "sticky",
          marginTop: "-32px",
          bottom: "-20px",
          left: "0%",
          fontSize: "small",
          color: "rgb(170, 170, 170)",
          zIndex: "-10",
        }}
      >
        :))) this is sick (compliments of danieldb)
      </p>
    </div>
  );
}

export default FooterSegment;
