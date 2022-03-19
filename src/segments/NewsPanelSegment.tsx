import * as React from "react"
import Panel from "../components/Panel"
import statesimg from '../images/stateswin.jpg'


const news = {
    title: "BREAKING NEWS",
    subtitle: "Quahogs win states!",
    author: "daniel duarte-baird",
    date: "3/5/22",
    img: statesimg,
    content: "The quahogs have won stats, this means theyre going to worlds, but only with your help! Check out the donate page for more!",
    cookie: "winstates"
  }

function NewsPanelSegment() {
        return <div id="news_panel_div" hidden onLoad={(e)=>{
                e.currentTarget.hidden = (getCookie('news') != news.cookie) ? false : true
                setCookie("news", news.cookie, 365)
            }}>
                <Panel title={news.title} subtitle={news.subtitle} date={news.date} author={news.author} img={news.img} >
                    {news.content}
                </Panel>
            </div>  
}

export default NewsPanelSegment