import * as React from "react"
import TextBox from "../components/TextBox"

function WhyGiveSegment() {
        return <div style={{
            display: "flex",
            flexDirection: 'row'
          }}>
          <TextBox title={"We need your help"}> <p>
          As competitors in the Rhode Island FTC robotics competiton, getting to the world championship is one of our overarching goals every year.
          <br></br>
          <br></br>
          This season, we have been able to get there through winning the state competition, but logistics havebeen daunting. 
          <br></br>
          <br></br>
          Flights, hotels, and transportation are but a few considerations we are considering and raising money to fund.
          <br></br>
          <br></br>
          We are still working out travel accomodations, but evey donation counts, and we cannot do this without your help.
          Below, you can find instructions on how to donate to our team.
          <br></br>
          <br></br>
          Thank you for your support!
          <br></br>
          <br></br>
          </p> </TextBox>
        </div>
}

export default WhyGiveSegment
          