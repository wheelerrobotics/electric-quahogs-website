
import * as React from "react"
import "../css/people_styles.css"

function PeopleCarousel(props: {title: string} | any) {
        return <div>
                    <div className="normie_area">
                        <div className="normie_scroll">
                            <div className="people_header">
                                <h1>{props.title}</h1>
                                <hr></hr>
                            </div>
                            <div className="people_slider">
                                {props.children}
                            </div>
                        </div>
                    </div>
                    
            </div>
}

export default PeopleCarousel