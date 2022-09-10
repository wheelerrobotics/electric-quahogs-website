import * as React from "react";
import "../css/navi_styles.css";
import "../css/mobile/m_navi_styles.css";

function Navi(props: any) {
  return <div className="navi">{props.children}</div>;
}

export default Navi;
