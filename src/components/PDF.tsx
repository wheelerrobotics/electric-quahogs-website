
import * as React from "react"
import "../css/textbox_styles.css"
import "../css/mobile/m_textbox_styles.css"

function PDF(props: {url: string | null} | any) {
        return <object data={props.url ?? "http://africau.edu/images/default/sample.pdf"} width="60%" height={"100%"}>
        <p>Alternative text - include a link <a href={props.url ?? "http://africau.edu/images/default/sample.pdf"}>to the PDF!</a></p>
      </object>
}

export default PDF