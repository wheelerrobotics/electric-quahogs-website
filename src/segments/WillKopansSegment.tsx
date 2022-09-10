import * as React from "react";
import TextBox from "../components/TextBox";

function WillKopansSegment() {
  return (
    <TextBox title={"FIRST® Robotics"}>
      <p>
        Wheeler's Robotics Team competes in FIRST's FTC competition.
        <img
          style={{
            right: "5%",
          }}
          src={
            "https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/thumbnails/FIRST-V.png"
          }
        ></img>
        <br></br>
        <br></br>
        This is an international competition with nearly 80,000 teams
        participating.
        <br></br>
        <br></br>
        FIRST (“For Inspiration and Recognition of Science and Technology”) was
        founded in 1989 by Dean Kamen, the inventor of the Segway (nice).
        <br></br>
        <br></br>
        The goal of the competition is to inspire young people to take an
        interest in STEM (science, technology, engineering, and mathematics)
        topics. Each year FTC (First Tech Challenge) comes up with a new
        challenge for robots to solve that usually involves blocks, balls, or
        other easily manipulated "game pieces".
        <br></br>
        <br></br>
        For information on this year's particular game and scoring, consult a
        team leader or the FIRST website.
      </p>
    </TextBox>
  );
}

export default WillKopansSegment;
