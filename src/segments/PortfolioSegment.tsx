import React from "react";
import TextBox from "../components/TextBox";
import isBrowser from "../helpers/isBrowser";

function PortfolioSegment() {
  return (
    <TextBox title={"Our (old) Portfolio"}>
      {/* <iframe
        src="https://github.com/wheelerrobotics/wheelerrobotics.github.io/blob/master/Engineering%20Portfolio%202021-2022.pdf"
        height={isBrowser() ? (window.innerWidth > 600 ? 900 : 500) : ""}
        width={isBrowser() ? (window.innerWidth > 600 ? 750 : 400) : ""}
        style={{ overflow: "hidden" }}
        frameBorder="0"
      >
        Loading…
      </iframe> */}
      Broken right now (will be fixed when i feel like it)
    </TextBox>
  );
}

export default PortfolioSegment;
