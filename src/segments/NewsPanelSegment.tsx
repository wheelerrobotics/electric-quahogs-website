import * as React from "react";
import Panel from "../components/Panel";
import statesimg from "../images/stateswin.jpg";
import { getCookie, setCookie } from "../helpers/cookieHelper";

const news = {
  title: "Starting the year with a bang!",
  subtitle: "",
  author: "daniel duarte-baird",
  date: "9/6/22",
  img: "",
  content: "",
  cookie: "STARTUP",
};

function NewsPanelSegment() {
  return (
    <div
      id="news_panel_div"
      hidden
      onLoad={(e) => {
        e.currentTarget.hidden = true;
        // getCookie("news") != news.cookie ? false : true;
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
