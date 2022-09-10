import * as React from "react";
import TextBox from "../components/TextBox";

function AboutSegment() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <TextBox title={"About Us"}>
        {" "}
        <p>
          Team 252 is a part of the FTC Rhode Island region and has competed for
          almost a decade and a half.
          <br></br>
          <br></br>
          During the season, our 18 members put in hundreds of hours of work and
          dedication to build the best robot we can. Based out of The Wheeler
          School in Providence, Rhode Island, we compete against 26 teams from
          across the state.
          <br></br>
          <br></br>
          Although this may seen very science oriented, you don't need to work
          on the robot or code if you don't want to. When we present at states
          we need an engineering portfolio, a presentation planned out that
          touches on all the things we did this season. Other ways to contribute
          to the team include looking into outreach (the judges love it when you
          present to people and spread the FIRST message), writing portfolio
          stuff, and helping with the website (we really gotta update this thing
          more, its kinda sad how neglected its been).
          <br></br>
          <br></br>
          Last year, we placed First at the Rhode Island FTC Championship,
          earning us an invitation to attend the World Championship in Texas
          where we will compete against nearly 200 of the best teams from across
          the globe.
          <br></br>
          <br></br>
          As a team, we emphasize developing team members skills using CAD
          programs such as Fusion 360, programming in Java (and maybe kotlin in
          the future), as well as developing their use of the engineering design
          process and more.
        </p>{" "}
      </TextBox>
    </div>
  );
}

export default AboutSegment;
