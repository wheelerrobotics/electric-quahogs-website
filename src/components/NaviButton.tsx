
import * as React from "react"
import "../css/navi_styles.css"
const img_size = 10;
function NaviButton(props: { title: string, refer: string, img: string, icn: string }) {
        return <button className="navi_button" onClick={() => {
            for(let page of document.getElementById("pages")?.childNodes ){
                (page.id == props.refer) ? page.hidden = false : page.hidden = true;
            }
            (window).scrollTo(0, 0);

        }}>
                    <i className={props.img}></i>
                    <p>{props.title}</p>
                </button>
}

export default NaviButton