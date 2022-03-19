import * as React from "react"
import "../css/textbox_styles.css"
import "../css/mobile/m_textbox_styles.css"

function SponsorBox(props: {title: string} | any) {
        return <div className="sponsorbox">
                    
                    {props.children}
                        
            </div>
}

export default SponsorBox