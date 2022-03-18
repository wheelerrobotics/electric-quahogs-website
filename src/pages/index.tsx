import * as React from "react"
import "../css/styles.css"
import NaviButton from "../components/NaviButton";
import Navi from "../components/Navi";
import Post from "../components/Post";
import Leader from "../components/Leader";
import PeopleBox from "../components/PeopleBox";
import PeopleCarousel from "../components/PeopleCarousel";
import TextBox from "../components/TextBox";
import { Normie, select } from "../components/Normie";
import Panel from "../components/Panel";
import "../components/inter.ts";
import {newInter} from "../components/inter";
import Interactive from "../components/InteractiveBackground";
import SideBar from "../components/SideBar.";
import SideBarButton from "../components/SideBarButton";
import SponsorBox from "../components/SponsorBox";
import Sponsor from "../components/Sponsor";
import SideBarButtonDrop from "../components/SideBarButtonDrop";
import Matter from "matter-js";
// styles
const pageStyles = {
  color: "rgb(100, 100, 100)",
};
const news = {
  title: "BREAKING NEWS",
  subtitle: "Quahogs win states!",
  author: "daniel duarte-baird",
  date: "3/22/22",
  img: "https://static.independent.co.uk/s3fs-../../thumbnails/image/2016/12/07/07/clam.jpg?quality=75&width=982&height=726&auto=webp",
  content: "the quahogs have won stats, this means theyre going to worlds",
  cookie: "winstates"
}

// data
const links = [
  
]

// markup
const IndexPage = () => {
  return (

  <main>
    <span className="universal">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" crossOrigin="anonymous"></link>
      <script src="https://kit.fontawesome.com/64919bd2ce.js" crossOrigin="anonymous"></script>
      <title>wheelerrobotics!</title>
      <Navi>
        <NaviButton title={"Home"} refer={"home"} img={"fa fa-home"} icn={""}></NaviButton>
        <NaviButton title={"About Us"} refer={"about"} img={"fa fa-users"} icn={""}></NaviButton>
        <NaviButton title={"Our Work"} refer={"work"} img={"fa fa-comment"} icn={""}></NaviButton>
        <NaviButton title={"Give"} refer={"give"} img={"fa fa-heart"} icn={""}></NaviButton>
      </Navi>
      <div id="pages">
        
        <div id="home">
          <div className="page_area">
            <div className="title_area">
              <h1>Logo goes here!</h1>
            </div>
            <div className="page_body">

              <SideBar title="Loving the electric quahogs? Look over here!">
                  <SideBarButton title={"Latest News!"} redirect={"news"}></SideBarButton>
                  <SideBarButton title={"Our Github!"} redirect={"https://github.com/wheelerrobotics"}></SideBarButton>
                  <SideBarButton title={"Sign Up!"} redirect={"https://docs.google.com/forms/d/e/1FAIpQLSdnxH2JlEnOVB2kW3c0EjCPh8TfeSSj3Itm8qfXFJKTSbQPfA/viewform"}></SideBarButton>
                  <SideBarButton title={"Will Kopans!"} redirect={"https://www.linkedin.com/in/william-kopans"}></SideBarButton>
              </SideBar>
              <div className="posts_area">
                <Post title={"Template"} subtitle={"Boilerplate"} date={"11/19/20"} img={"https://i.vimeocdn.com/video/1100868839-c27cae7588087e5630afd15af9590d256842a20bf742b4f0cf793b8e64ae3ac4-d?mw=1000&mh=563&q=70"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br></br>
                  Officiis veniam laudantium tempore magni sunt aliquam neque non velit saepe? Iure, similique qui fugiat inventore quia corporis deleniti minima natus consequuntur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br></br>
                  Officiis veniam laudantium tempore magni sunt aliquam neque non velit saepe? Iure, similique qui fugiat inventore quia corporis deleniti minima natus consequuntur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br></br>
                  Officiis veniam laudantium tempore magni sunt aliquam neque non velit saepe? Iure, similique qui fugiat inventore quia corporis deleniti minima natus consequuntur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br></br>
                  Officiis veniam laudantium tempore magni sunt aliquam neque non velit saepe? Iure, similique qui fugiat inventore quia corporis deleniti minima natus consequuntur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br></br>
                  Officiis veniam laudantium tempore magni sunt aliquam neque non velit saepe? Iure, similique qui fugiat inventore quia corporis deleniti minima natus consequuntur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br></br>
                  Officiis veniam laudantium tempore magni sunt aliquam neque non velit saepe? Iure, similique qui fugiat inventore quia corporis deleniti minima natus consequuntur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br></br>
                  Officiis veniam laudantium tempore magni sunt aliquam neque non velit saepe? Iure, similique qui fugiat inventore quia corporis deleniti minima natus consequuntur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br></br>
                  Officiis veniam laudantium tempore magni sunt aliquam neque non velit saepe? Iure, similique qui fugiat inventore quia corporis deleniti minima natus consequuntur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br></br>
                  Officiis veniam laudantium tempore magni sunt aliquam neque non velit saepe? Iure, similique qui fugiat inventore quia corporis deleniti minima natus consequuntur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br></br>
                  Officiis veniam laudantium tempore magni sunt aliquam neque non velit saepe? Iure, similique qui fugiat inventore quia corporis deleniti minima natus consequuntur.

                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br></br>
                  Officiis veniam laudantium tempore magni sunt aliquam neque non velit saepe? Iure, similique qui fugiat inventore quia corporis deleniti minima natus consequuntur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br></br>
                  Officiis veniam laudantium tempore magni sunt aliquam neque non velit saepe? Iure, similique qui fugiat inventore quia corporis deleniti minima natus consequuntur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br></br>
                  Officiis veniam laudantium tempore magni sunt aliquam neque non velit saepe? Iure, similique qui fugiat inventore quia corporis deleniti minima natus consequuntur.
                </Post>
                <Post title={"Sample"} subtitle={"The best post!"} date={"11/11/25"} img={"https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1-3000x2000.jpg"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod in, neque consequuntur animi recusandae atque asperiores beatae saepe nemo quam! Ipsam sit consequatur veniam amet minus fuga quam accusamus eos.
                </Post>
                <Post title={"Initial"} subtitle={"Subtitle"} date={"11/19/20"} img={"https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1-3000x2000.jpg"}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, asperiores dolores? Iste facere facilis optio maiores amet nostrum corrupti aut minus, dicta explicabo, ex ratione a enim ab. Nihil, dolor.
                </Post>
              </div>
              <SponsorBox>
                <Sponsor img={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}></Sponsor>
              </SponsorBox>
            </div>
          </div>
        </div>
        <div id="about" hidden>
          <div className="title_area">
            <h1>About Us</h1>
          </div>
          <div className="people_area">

          <div className="leader_area">
            <PeopleBox title={"Leadership"}>
              <Leader name={"William Kopans"} grad_year={"2022"} email={"william.kopans@wheelergmail.org"} bio={"He's a bird, he's a plane, he's a kopan!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Will.jpg"}></Leader>
              <Leader name={"Mayte Segura"} grad_year={"2022"} email={"mayte.segura@wheelergmail.org"} bio={"She's a bird, she's a plane, she's mayte segura!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Mayte.jpg"}></Leader>
            </PeopleBox>
            </div>
            <div style={{
              display: "flex",
              flexDirection: 'row'
            }}>
              
            <TextBox title={"About Us"} width={47.5} right={0}> <p>
              We are the electric quahogs! yay!
              </p> </TextBox>
              <TextBox title={"About Us"} width={47.5} left={5}> <p>
              We are the electric quahogs! yay!
              </p> </TextBox>
            </div>
              
              <PeopleCarousel title="normies :(">
                <Normie name={"Henry Germano"} grad_year={"2022"} email={"henry.germano@wheelergmail.org"} bio={"He's a bird, he's a plane, he's a plane!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Henry.jpg"}></Normie>
                <Normie name={"Daniel Duarte-Baird"} grad_year={"2025"} email={"daniel.duarte-baird@wheelergmail.org"} bio={"He's a bird, he's a plane, he's daniel duarte-baird!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Daniel.jpg"}></Normie>
                <Normie name={"Beatrice Schroder"} grad_year={"2024"} email={"beatrice.schroder@wheelergmail.org"} bio={"She's a bird, she's a plane, she's beatrice schroder!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Beatrice.jpg"}></Normie>
                <Normie name={"Myles Johnson"} grad_year={"2023"} email={"myles.johnson@wheelergmail.org"} bio={"He's a bird, he's a plane, he's myles johnson!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Myles.jpg"}></Normie>
                <Normie name={"Reed Turner-Murray"} grad_year={"2022"} email={"reed.turner-murray@wheelergmail.org"} bio={"He's a bird, he's a plane, he's a reed!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Reed.jpg"}></Normie>
                <Normie name={"Tyler Wang"} grad_year={"2024"} email={"tyler.wang@wheelergmail.org"} bio={"He's a bird, he's a plane, he's tyler wang!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Tyler.jpg"}></Normie>
                <Normie name={"Jaiden Dash"} grad_year={"2024"} email={"jaiden.dash@wheelergmail.org"} bio={"They're a bird, they're a plane, they're a dash!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Jaiden.jpg"}></Normie>
                <Normie name={"Lily Thornton"} grad_year={"2024"} email={"lily.thornton@wheelergmail.org"} bio={"He's a bird, she's a plane, they're lily thornton!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Lily.jpg"}></Normie>
                <Normie name={"Griffin Haismann"} grad_year={"2025"} email={"griffin.haismann@wheelergmail.org"} bio={"He's a bird, he's a plane, he's a griffin!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Griffin.jpg"}></Normie>
                <Normie name={"Seoyon Kim"} grad_year={"2025"} email={"seoyon.kim@wheelergmail.org"} bio={"She's a bird, she's a plane, she's seoyon kim!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Seoyon.jpg"}></Normie>
                <Normie name={"Isabelle Page"} grad_year={"2025"} email={"isabelle.idkherlastname@wheelergmail.org"} bio={"She's a bird, she's a plane, she's isabelle!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Isabelle.jpg"}></Normie>
                {/* <Normie name={"Jackson Page"} grad_year={"2025"} email={"jackson.page@wheelergmail.org"} bio={"He's a bird, he's a plane, he's jackson page!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Jackson.jpg"}></Normie> */}
                {/* <Normie name={"Charlie Shea"} grad_year={"2025"} email={"charlie.shea@wheelergmail.org"} bio={"He's a bird, he's a plane, he's charlie shea!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Charlie.jpg"}></Normie> */}
                <Normie name={"Sam Kurtis"} grad_year={"2022"} email={"sam.kurtis@wheelergmail.org"} bio={"He's a bird, he's a plane, he's sam kurtis!"} img={"../../images/Pictures/Team Photo/252 2022 Photos/Sam.jpg"}></Normie>
              </PeopleCarousel>
          </div>
      </div>
      <div id="give" hidden>
        <div className="title_area">
            <h1>How <i>You</i> Can Help</h1>
          </div>
          <TextBox title={"We are trying to get to worlds, and every penny counts!"}>
              <h3>Here is how you can donate:</h3>
              <div style={{
                marginLeft: "5%"
              }}>
                <ol className="instructions">
                  <li>
                      <p>First, go to <u style={{cursor: "pointer"}}><a onClick={(e)=>{window.open("https://www.wheelerschool.org/support")}}>wheelerschool.org/support</a></u>.</p>
                  </li>
                  <li>
                    <p>Then click "Make A Gift"</p>
                    <img src="../../images/step2.png"></img>
                  </li>
                  <li>
                    <p>Next, select your donation amount.</p>
                    <img src="../../images/step1.png" height={200}></img>
                  </li>
                  <li>
                    <p>After that, select <u><i>Robotics World Champion Sponsorship</i></u> as the destination.</p>
                    <img src="../../images/step4.png" height={200}></img>
                  </li>
                  <li>
                    <p>Finally, secure your payment!</p>
                    <img src="../../images/step5.png"></img>
                  </li>
                </ol>
                <hr></hr>
                <div>
                  <h2 style={{fontFamily: "Georgia"}}>If you would like, you can fill out this form to tell us why you donated and so that we can thank you!</h2>
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScan6HDMH5laWBZs8HrQ2481wpCBnC5ps6YhN_XwIybk4J88w/viewform?embedded=true" width="640" height="883" style={{overflow: "hidden"}} frameBorder="0">Loading…</iframe>
                </div>

              </div>
            </TextBox>
      </div>
      <div id="feedback" hidden>
        <div style={{ marginTop: "10%" }}>
          <p>suggestions go here :)</p>
          <input id="suggestions" placeholder="this doesnt actually do anything"></input>
        </div>
      </div>
      <div id="work" hidden>
        <div className="title_area">
          <h1>What We Have Done</h1>
        </div>
        <div id="page_area">
          <TextBox title={"Our Portfolio"}>
            <iframe src="https://wheelerrobotics.github.io/Engineering%20Portfolio%202021-2022.pdf" width="640" height="883" style={{overflow: "hidden"}} frameBorder="0">Loading…</iframe>
            
          </TextBox>

        </div>
      </div>
    </div>
    <div className="footer" id="tata">
        <Interactive id={"eeeer"}></Interactive>
        <p style={{
          position: "sticky",
          marginTop: "-32px",
          bottom: "-20px",
          left: "0%",
          fontSize: "small",
          color: "rgb(170, 170, 170)",
          zIndex: "-10",
        }}>here, have some fun (compliments of danielduarte-baird)</p> 
      </div>
    <div id="news_panel_div" hidden onLoad={(e)=>{
      e.currentTarget.hidden = (getCookie('news') != news.cookie) ? false : true
      setCookie("news", news.cookie, 365)
    }}>
        <Panel title={news.title} subtitle={news.subtitle} date={news.date} author={news.author} img={news.img} >
          {news.content}
        </Panel>
    </div>  
    </span>


    </main>

  );
}

function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export default IndexPage
