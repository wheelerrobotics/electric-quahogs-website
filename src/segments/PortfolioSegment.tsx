import React from 'react'
import TextBox from '../components/TextBox'
import isBrowser from '../helpers/isBrowser'


function PortfolioSegment(){
    return <TextBox title={"Our Portfolio"}>
                <iframe src="https://wheelerrobotics.github.io/Engineering%20Portfolio%202021-2022.pdf" height={isBrowser() ? (window.innerWidth > 600) ? 900 : 500 : ""} width={isBrowser() ? (window.innerWidth > 600) ? 750 : 400 : ""} style={{overflow: "hidden"}} frameBorder="0">Loading…</iframe>
                
            </TextBox>
}

export default PortfolioSegment