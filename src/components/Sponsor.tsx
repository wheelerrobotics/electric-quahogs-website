import * as React from "react"
import "../css/textbox_styles.css"
import "../css/mobile/m_textbox_styles.css"

function SideBar(props: {img: string, thanks: string, name: string} | any) {
        return <div className="sponsor">
                    <img alt={`${props.name}`} src={props.img} style={{
                        width: '100%'
                    }}></img>
                    <h6 style={{
                        fontFamily: "Georgia, 'Times New Roman', Times, serif", 
                        fontWeight: "bold",
                        lineHeight: "100%"
                        }}>{props.thanks ?? "Thanks so much to our incredible sponsor"}</h6>
                    <p style={{
                        fontSize: "10pt", 
                        lineHeight: "100%"
                        }}>{props.ad ?? "Use our sponsor for your needs! You can find their business online somewhere!"}</p>
            </div>
}

export default SideBar