
import * as React from "react"
import "../css/post_styles.css"

function Post(props: { title: string, subtitle:string, date: string, img: string } | any) {
        return <div className="post">
            <img src={props.img} className="post_img" width={typeof window !== 'undefined' && window.innerWidth ? window.innerWidth/1.4 : 300}></img>
            <h1 className="post_title">{props.title}</h1>
            <h2 className="post_desc">{props.subtitle}</h2>
            <p className="post_date">{props.date}</p>
            <div className = "expand">
                <p onClick={(e)=>{toggleHidden(e.currentTarget.parentElement ?? null)}} className="reveal">...</p>
                <div className="expanded" hidden>
                    <div style={{height: "100%"}}>
                        <p className="post_text">{props.children}</p>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </div>
}

function toggleHidden(div: any){
    // had to set div to any cuz ts was giving me a headache
    if (!div) return;
    //div.querySelector('p').hidden = !div.querySelector('p').hidden;
    div.querySelector('div').hidden = !div.querySelector('div').hidden;
}
export default Post