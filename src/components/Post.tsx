import * as React from "react";
import "../css/post_styles.css";
import "../css/mobile/m_post_styles.css";
import Panel from "./Panel";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

function Post(
  props:
    | {
        title: string;
        subtitle: string;
        date: string;
        author: string;
        img: string;
      }
    | any
) {
  return (
    <div className="post">
      {/* <img src={props.img} className="post_img" width={typeof window !== 'undefined' && window.innerWidth ? window.innerWidth/2 : 300}></img> */}
      <img
        alt={`image of ${props.title}`}
        src={props.img}
        className="post_img"
      ></img>
      <h1 className="post_title">{props.title}</h1>
      <h2 className="post_desc">{props.subtitle}</h2>
      <p className="post_date">{props.date}</p>
      <div className="expand">
        <p
          onClick={(e) => {
            toggleHidden(e.currentTarget.parentElement ?? null);
          }}
          className="reveal"
        >
          see more...
        </p>
        <div className="expanded">
          <Panel
            hidden={true}
            title={props.title}
            subtitle={props.subtitle}
            date={props.date}
            author={props.author}
            img={props.img}
          >
            {" "}
            {props.children}
          </Panel>
        </div>
      </div>
    </div>
  );
}
function toggleHidden(div: any) {
  // had to set div to any cuz ts was giving me a headache
  if (!div) return;
  //div.querySelector('p').hidden = !div.querySelector('p').hidden;
  div.querySelector("div").querySelector("div").hidden = !div
    .querySelector("div")
    .querySelector("div").hidden;
}
export default Post;
