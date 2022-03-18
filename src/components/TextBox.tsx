
import * as React from "react"
import "../css/textbox_styles.css"

function TextBox(props: {title: string, width:number, right: number, left: number} | any) {
        return <div style={{
            width: ((props.width ?? 100)/100 * 90)  + "%",
            marginRight: props.right + "%" ?? "5%",
            marginLeft: props.left + "%" ?? "5%",
        }} className="textbox">
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