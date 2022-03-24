import * as React from "react"
import Sponsor from "../components/Sponsor"
import SponsorBox from "../components/SponsorBox"
import logofull from "../favicon/logofulltrans.png"

function SponsorSegment() {
        return <SponsorBox title={"Sponsors"}>
                    <Sponsor img={logofull} thanks={"this is where our sponsors can go!"} ad={"contact us for more info!"}></Sponsor>
                </SponsorBox>
}

export default SponsorSegment