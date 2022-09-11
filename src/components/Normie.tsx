import * as React from "react";
import "../css/people_styles.css";
import "../css/mobile/m_people_styles.css";

function Normie(
  props:
    | {
        name: string;
        grad_year: string;
        email: string;
        bio: string;
        img: string;
      }
    | any
) {
  return (
    <div className="normie">
      <img
        alt={props.name + "'s portrait"}
        className="person_img"
        width={200}
        height={200}
        src={props.img}
      ></img>
      <p className="person_name">
        {props.name}
        <p className="person_year">{props.grad_year}</p>
      </p>
      <p className="person_email">{props.email}</p>
      <p className="person_bio">{props.bio}</p>
    </div>
  );
}
function select(normie: any) {
  normie.querySelector("img").width = normie.querySelector("img").width * 2;
}

export { Normie, select };
