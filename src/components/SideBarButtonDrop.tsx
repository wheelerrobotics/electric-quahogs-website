import * as React from "react"
import "../css/textbox_styles.css"
import "../css/mobile/m_textbox_styles.css"

function SideBarButtonDrop(props: {title: string, dropdown: boolean} | any) {
        return <div className="sidebar_button_drop">
                <div className="sidebar_button_drop_body">
                    <button>{props.title}</button>
                </div>
                <div className="sidebar_button_drop_content">
                    {props.children}
                </div>
            </div>
}
// sooooo, this isnt really working. 
//Probably jut implement the expando function with a sudebar dutton drop component and then put buttons inside of that

export default SideBarButtonDrop