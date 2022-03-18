import * as React from "react"
import "../css/textbox_styles.css"

function SideBar(props: {title: string} | any) {
        return <div className="sidebar">
                    <div className="sidebar_header">
                        <h1>{props.title}</h1>
                        <hr></hr>
                    </div>
                    <div className="sidebar_body">
                        
                        {props.children}
                        
                    </div>

                    <div className="sidebar_footer">
                        <p> <br></br> </p>
                    </div>
            </div>
}

export default SideBar