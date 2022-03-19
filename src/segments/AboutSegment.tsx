import * as React from "react"
import TextBox from "../components/TextBox"

function AboutSegment() {
        return <div style={{
            display: "flex",
            flexDirection: 'row'
          }}>
          <TextBox title={"About Us"} width={47.5} right={0}> <p>
            We are the electric quahogs! yay!
            </p> </TextBox>
            <TextBox title={"About Us"} width={47.5} left={5}> <p>
            We are the electric quahogs! yay!
            </p> </TextBox>
          </div>
}

export default AboutSegment