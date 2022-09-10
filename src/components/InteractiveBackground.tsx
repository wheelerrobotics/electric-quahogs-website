import Matter from "matter-js";
import "../css/people_styles.css";
import "../css/mobile/m_people_styles.css";
import { newInter } from "../helpers/inter";
import React, { useState } from "react";

function Interactive(props: { id: string; parent: HTMLElement } | any) {
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  const [t, setT] = useState(0);
  setTimeout(newInter, 1000, props.id);
  return (
    <div className="">
      <canvas
        id={props.id}
        style={{
          bottom: "0px",
          left: "0px",
          margin: "0px",
        }}
      ></canvas>
    </div>
  );
}

export default Interactive;
