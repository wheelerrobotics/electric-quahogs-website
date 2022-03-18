import * as React from "react"
import "../css/textbox_styles.css"

function SideBarButton(props: {title: string, redirect: string, sameTab: boolean } | any) {
        return <div className="sidebar_button">
                <div className="sidebar_button_body" >
                    <button onClick={(e)=>{
                        if(props.redirect == "news") {
                            (document.getElementById('news_panel_div') as HTMLDivElement).hidden = false;
                            return
                        }
                        if (props.sameTab) {
                            if(location) location.href = props.redirect
                        }else {
                            if(window != null) window.open(props.redirect)
                        }
                        }}>{props.title}</button>
                </div>
            </div>
}
// sooooo, this isnt really working. 
//Probably jut implement the expando function with a sudebar dutton drop component and then put buttons inside of that

export default SideBarButton