
import * as React from "react"
import "../css/people_styles.css"

function PeopleBox(props: {title: string} | any) {
        return <div className="">
                    <div className="people_header">
                        <h1>{props.title}</h1>
                    <hr></hr>
                    </div>
                    <div className="people_box">
                        {props.children}
                    </div>
            </div>
}

export default PeopleBox