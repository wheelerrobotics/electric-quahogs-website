import * as React from "react";

import mylespic from "../images/Portraits/Myles.jpg";
import maytepic from "../images/Portraits/Mayte.jpg";
import PeopleBox from "../components/PeopleBox";
import Leader from "../components/Leader";

function LeadershipSegment() {
  return (
    <div className="leader_area">
      <PeopleBox title={"Leadership"}>
        <Leader
          name={"Myles Johnson"}
          grad_year={"2023"}
          email={"myles.johnson@wheelergmail.org"}
          bio={"Doesn't even brak a sweat while heading 5 clubs"}
          cool={false}
          img={mylespic}
        ></Leader>
        <Leader
          name={"Mayte Segura"}
          grad_year={"2024"}
          email={"mayte.segura@wheelergmail.org"}
          bio={"Super cool person alert"}
          cool={true}
          img={maytepic}
        ></Leader>
      </PeopleBox>
    </div>
  );
}

export default LeadershipSegment;
