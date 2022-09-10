import * as React from "react";
import "../css/people_styles.css";
import "../css/mobile/m_people_styles.css";

function Leader(props: {
  name: string;
  grad_year: string;
  email: string;
  bio: string;
  cool: boolean;
  img: string;
}) {
  return (
    <div className="person">
      <img
        height={200}
        width={200}
        alt={props.name + "'s portrait"}
        className="person_img"
        src={props.img}
      ></img>
      <p className="person_name">
        {props.name}
        <p className="person_year">{props.grad_year}</p>
      </p>
      <p className="person_email">{props.email}</p>
      <p
        className="person_bio"
        onClick={() => {
          if (props.cool) alert("😎");
        }}
      >
        {props.bio}
      </p>
    </div>
  );
}

export default Leader;
