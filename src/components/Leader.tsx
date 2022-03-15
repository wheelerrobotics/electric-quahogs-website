
import * as React from "react"
import "../css/people_styles.css"

function Leader(props: {name: string, grad_year: string, email: string, bio: string, img: string }) {
        return <div className="person">
            <img className="person_img" src={props.img}></img>
            <p className="person_name">{props.name}<p className="person_year">{props.grad_year}</p></p> 
            <p className="person_email">{props.email}</p>
            <p className="person_bio">{props.bio}</p>
        </div>
}

export default Leader