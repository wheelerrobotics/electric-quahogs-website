import * as React from "react"
import "../css/panel_styles.css"
import Post from "./Post"
import { clearAllBodyScrollLocks } from 'body-scroll-lock';

function Panel(props: {title: string, subtitle: string, date: string, author: string, img: string} | any) {
        return <div hidden={props.hidden ? true : false} className="panel_backdrop" onKeyDown={(e)=>{e.currentTarget.hidden = (e.key == 'esc') || true}}>
            <div className="panel_body center">
                <div className="panel_header">
                    <div className="panel_navi">
                        <button style={{}} onClick={(e)=>{
                            e!.currentTarget!.parentElement!.parentElement!.parentElement!.parentElement!.hidden = true
                            clearAllBodyScrollLocks() 
                        }}>x</button>
                    </div>
                    <img src="https://i.vimeocdn.com/video/1100868839-c27cae7588087e5630afd15af9590d256842a20bf742b4f0cf793b8e64ae3ac4-d?mw=1000&mh=563&q=70"></img>
                    <h1>{props.title ?? "Breaking News!"}</h1>
                    <div style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <h2>{props.subtitle ?? ""}</h2>
                        <h3>{props.date ?? "11/17/06"}</h3>
                    </div>
                </div>
                <div className="panel_text">
                    <p> {props.children ?? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laborum magni velit voluptate, maiores animi aspernatur necessitatibus, eius eum voluptatem modi quae obcaecati. Ex, tenetur. Similique, officia. Nesciunt, voluptatum aliquam."}</p>
                </div>
                <div className="panel_footer">
                    <p>written by {props.author ?? "a member of the electric quahogs."}</p>
                </div>
            </div>
        </div>
}

export default Panel