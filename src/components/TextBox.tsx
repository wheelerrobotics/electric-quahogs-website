
import * as React from "react"
import "../css/textbox_styles.css"

function TextBox(props: {title: string} | any) {
        return <div className="textbox">
                    <div className="textbox_header">
                        <h1>{props.title}</h1>
                        <hr></hr>
                    </div>
                    <div className="textbox_body">
                        {props.children}
                    </div>
            </div>
}

export default TextBox