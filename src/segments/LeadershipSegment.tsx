import * as React from "react"

import willpic from "../images/Portraits/Will.jpg"
import maytepic from "../images/Portraits/Mayte.jpg"
import PeopleBox from "../components/PeopleBox"
import Leader from "../components/Leader"

function LeadershipSegment() {
        return <div className="leader_area">
                    <PeopleBox title={"Leadership"}>
                    <Leader name={"William Kopans"} grad_year={"2022"} email={"william.kopans@wheelergmail.org"} bio={"He's a bird, he's a plane, he's a kopan!"} img={willpic}></Leader>
                    <Leader name={"Mayte Segura"} grad_year={"2022"} email={"mayte.segura@wheelergmail.org"} bio={"She's a bird, she's a plane, she's mayte segura!"} img={maytepic}></Leader>
                    </PeopleBox>
                </div>
}

export default LeadershipSegment