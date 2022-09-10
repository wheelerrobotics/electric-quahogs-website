import * as React from "react";
import Navi from "../components/Navi";
import { NaviButton } from "../components/NaviButton";

function NavBarSegment() {
  return (
    <Navi>
      <NaviButton
        title={"Home"}
        refer={"home"}
        img={"fa fa-home"}
        icn={""}
      ></NaviButton>
      <NaviButton
        title={"About Us"}
        refer={"about"}
        img={"fa fa-users"}
        icn={""}
      ></NaviButton>
      <NaviButton
        title={"Our Work"}
        refer={"work"}
        img={"fa fa-comment"}
        icn={""}
      ></NaviButton>
    </Navi>
  );
}

export default NavBarSegment;
