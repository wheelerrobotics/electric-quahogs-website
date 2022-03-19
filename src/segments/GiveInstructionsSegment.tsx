import * as React from "react"
import TextBox from "../components/TextBox"
import isBrowser from "../helpers/isBrowser"
import step1 from "../images/step1.png"
import step2 from "../images/step2.png"
import step3 from "../images/step3.png"
import step4 from "../images/step4.png"
import step5 from "../images/step5.png"

function GiveInstructionsSegment() {
        return <TextBox title={"We are trying to get to worlds, and every penny counts!"}>
        <h3>Here is how you can donate:</h3>
        <div style={{
          marginLeft: "5%"
        }}>
          <ol className="instructions">
            <li>
                <p>First, go to <u style={{cursor: "pointer"}}><a onClick={(e)=>{window.open("https://www.wheelerschool.org/support")}}>wheelerschool.org/support</a></u>.</p>
            </li>
            <li>
              <p>Then click "Make A Gift"</p>
              <img src={step2} height={isBrowser() ? (window.innerWidth > 600) ? 200 : "" : "" } width={isBrowser() ? (window.innerWidth > 600) ? "" : 200 : ""}></img>
            </li>
            <li>
              <p>Next, select your donation amount.</p>
              <img src={step1} height={isBrowser() ? (window.innerWidth > 600) ? 200 : "" : "" } width={isBrowser() ? (window.innerWidth > 600) ? "" : 260 : ""}></img>
            </li>
            <li>
              <p>After that, select <u><i>Robotics World Champion Sponsorship</i></u> as the designation.</p>
              <img src={step4} height={isBrowser() ? (window.innerWidth > 600) ? 200 : "" : "" } width={isBrowser() ? (window.innerWidth > 600) ? "" : 270 : ""}></img>
            </li>
            <li>
              <p>Finally, secure your payment!</p>
              <img src={step5} height={isBrowser() ? (window.innerWidth > 600) ? 200 : "" : "" } width={isBrowser() ? (window.innerWidth > 600) ? "" : 220 : ""}></img>
            </li>
          </ol>
          <hr></hr>
          <div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScan6HDMH5laWBZs8HrQ2481wpCBnC5ps6YhN_XwIybk4J88w/viewform?embedded=true" width="300" height="900" style={{overflow: "hidden"}} frameBorder="0">Loading…</iframe>
          </div>

        </div>
      </TextBox>
}

export default GiveInstructionsSegment