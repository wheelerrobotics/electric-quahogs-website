import * as React from "react";
import Panel from "../components/Panel";
import statesimg from "../images/stateswin.jpg";
import { getCookie, setCookie } from "../helpers/cookieHelper";

const news = {
  title: "BREAKING NEWS",
  subtitle: "YOU SHOULD JOIN ROBOTICS",
  author: "daniel duarte-baird",
  date: "9/6/22",
  img: "https://api.time.com/wp-content/uploads/2017/04/sam.jpeg?quality=100&w=610",
  content:
    "y'all, i promise we're really cool and fun and awsome people. also its a really fun club",
  cookie: "JOINNOW",
};

function NewsPanelSegment() {
  return (
    <div
      id="news_panel_div"
      hidden
      onLoad={(e) => {
        e.currentTarget.hidden =
          getCookie("news") != news.cookie ? false : true;
        setCookie("news", news.cookie, 365);
      }}
    >
      <Panel
        title={news.title}
        subtitle={news.subtitle}
        date={news.date}
        author={news.author}
        img={news.img}
      >
        {news.content}
      </Panel>
    </div>
  );
}

export default NewsPanelSegment;
