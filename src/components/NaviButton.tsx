
import * as React from "react"
import "../css/navi_styles.css"
import "../css/mobile/m_navi_styles.css"
const img_size = 10;
function NaviButton(props: { title: string, refer: string, img: string, icn: string }) {
        return <button className="navi_button" onClick={() => {
            
            switchPage(props.refer)
            window.location.href = "##" + props.refer;

            if (window) window.scrollTo(0, 0)
        }}>
                    <i className={props.img}></i>
                    <p>{props.title}</p>
                </button>
}
function switchPage(name: string){
    if (document.getElementById("pages")?.childNodes){
        for(let page of document.getElementById("pages")?.childNodes as NodeListOf<HTMLElement>){
            (page.id == name) ? page.hidden = false : page.hidden = true;
        }
    }   
}

export {NaviButton, switchPage}