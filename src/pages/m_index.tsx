import * as React from "react"
import "../css/styles.css"
import "../css/mobile/m_styles.css"
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

import willpic from "../images/Portraits/Will.jpg"
import maytepic from "../images/Portraits/Mayte.jpg"
import mylespic from "../images/Portraits/Myles.jpg"
import danielpic from "../images/Portraits/Daniel.jpg"
import henrypic from "../images/Portraits/Henry.jpg"
import beatricepic from "../images/Portraits/Beatrice.jpg"
import reedpic from "../images/Portraits/Reed.jpg"
import isabellepic from "../images/Portraits/Isabelle.jpg"
import jaidenpic from "../images/Portraits/Jaiden.jpg"
import lilypic from "../images/Portraits/Lily.jpg"
import tylerpic from "../images/Portraits/Tyler.jpg"
import seoyonpic from "../images/Portraits/Seoyon.jpg"
import griffinpic from "../images/Portraits/Griffin.jpg"
import sampic from "../images/Portraits/Sam.jpg"
import nathanpic from "../images/Portraits/Nathan.jpg" // ahhhhh

import logo from "../favicon/logotrans.png"
import logofull from "../favicon/logofulltrans.png"

import step1 from "../images/step1.png"
import step2 from "../images/step2.png"
import step3 from "../images/step3.png"
import step4 from "../images/step4.png"
import step5 from "../images/step5.png"
import Helm from "../components/Hemlet";
import PostArea from "../segments/PostArea";

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
  const newLocal = this;
  return (

  <main>
    <Helm></Helm>
      
      
      {/* <meta name="icon" href={logo}/> */}
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" crossOrigin="anonymous"></link>
      <script src="https://kit.fontawesome.com/64919bd2ce.js" crossOrigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"></link>
      <Navi>
        <NaviButton title={"Home"} refer={"home"} img={"fa fa-home"} icn={""}></NaviButton>
        <NaviButton title={"About Us"} refer={"about"} img={"fa fa-users"} icn={""}></NaviButton>
        <NaviButton title={"Our Work"} refer={"work"} img={"fa fa-comment"} icn={""}></NaviButton>
        <NaviButton title={"Give"} refer={"give"} img={"fa fa-heart"} icn={""}></NaviButton>
      </Navi>
      <div id="pages" >
        
        <div id="home">
          <div className="page_area">
            <div className="title_area">
              <img src={logofull} height={200} style={{marginBottom: "2%"}}></img><h1 hidden={window.innerWidth < 600}>Electric Quahogs!</h1>
            </div>
            <div className="page_body">
            <div style={{position: "absolute", float: 'right', right:'0px', display: 'flex', flexDirection: "column"}}>
                <button style={{width: '100px', height: '40px', float: 'right',position: "absolute", right:'0px', backgroundColor: 'darkgray'}} onClick={(e)=>{
                  e!.currentTarget!.parentElement!.querySelector('span')!.hidden = !e!.currentTarget!.parentElement!.querySelector('span')!.hidden;
                  e.currentTarget.style.backgroundColor = e.currentTarget.style.backgroundColor == 'gray' ? 'darkgray' : 'gray';
                  //e.currentTarget.innerHTML[e.currentTarget.innerHTML.length-1] = e.currentTarget.innerHTML[e.currentTarget.innerHTML.length-1] == '\u02C3' ? '\u02C5' : '\u02C3';
                  
                }}>sponsors!</button>
                <span hidden>
                  <SponsorBox>
                    <Sponsor img={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}></Sponsor>
                </SponsorBox>
                </span>
              </div>
              <div style={{position: "absolute", display: 'flex', flexDirection: "column"}}>
                <button style={{width: '100px', height: '40px', backgroundColor: 'darkgray'}} onClick={(e)=>{
                  e!.currentTarget!.parentElement!.querySelector('span')!.hidden = !e!.currentTarget!.parentElement!.querySelector('span')!.hidden;
                  e.currentTarget.style.backgroundColor = e.currentTarget.style.backgroundColor == 'gray' ? 'darkgray' : 'gray';
                  //e.currentTarget.innerHTML[e.currentTarget.innerHTML.length-1] = e.currentTarget.innerHTML[e.currentTarget.innerHTML.length-1] == '\u02C3' ? '\u02C5' : '\u02C3';
                  
                }}>more!</button>
                <span hidden>
                <SideBar title="">
                    <SideBarButton title={"Latest News!"} redirect={"news"}></SideBarButton>
                    <SideBarButton title={"Our Github!"} redirect={"https://github.com/wheelerrobotics"}></SideBarButton>
                    <SideBarButton title={"Sign Up!"} redirect={"https://docs.google.com/forms/d/e/1FAIpQLSdnxH2JlEnOVB2kW3c0EjCPh8TfeSSj3Itm8qfXFJKTSbQPfA/viewform"}></SideBarButton>
                    <SideBarButton title={"Will Kopans!"} redirect={"https://www.linkedin.com/in/william-kopans"}></SideBarButton>
                </SideBar>
                </span>
              </div>
              <PostArea></PostArea>
              
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
              <Leader name={"William Kopans"} grad_year={"2022"} email={"william.kopans@wheelergmail.org"} bio={"He's a bird, he's a plane, he's a kopan!"} img={willpic}></Leader>
              <Leader name={"Mayte Segura"} grad_year={"2022"} email={"mayte.segura@wheelergmail.org"} bio={"She's a bird, she's a plane, she's mayte segura!"} img={maytepic}></Leader>
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
                <Normie name={"Henry Germano"} grad_year={"2022"} email={"henry.germano@wheelergmail.org"} bio={"He's a bird, he's a plane, he's a plane!"} img={henrypic}></Normie>
                <Normie name={"Daniel Duarte-Baird"} grad_year={"2025"} email={"daniel.duarte-baird@wheelergmail.org"} bio={"He's a bird, he's a plane, he's daniel duarte-baird!"} img={danielpic}></Normie>
                <Normie name={"Beatrice Schroder"} grad_year={"2024"} email={"beatrice.schroder@wheelergmail.org"} bio={"She's a bird, she's a plane, she's beatrice schroder!"} img={beatricepic}></Normie>
                <Normie name={"Myles Johnson"} grad_year={"2023"} email={"myles.johnson@wheelergmail.org"} bio={"He's a bird, he's a plane, he's myles johnson!"} img={mylespic}></Normie>
                <Normie name={"Reed Turner-Murray"} grad_year={"2022"} email={"reed.turner-murray@wheelergmail.org"} bio={"He's a bird, he's a plane, he's a reed!"} img={reedpic}></Normie>
                <Normie name={"Tyler Wang"} grad_year={"2024"} email={"tyler.wang@wheelergmail.org"} bio={"He's a bird, he's a plane, he's tyler wang!"} img={tylerpic}></Normie>
                <Normie name={"Jaiden Dash"} grad_year={"2024"} email={"jaiden.dash@wheelergmail.org"} bio={"They're a bird, they're a plane, they're a dash!"} img={jaidenpic}></Normie>
                <Normie name={"Lily Thornton"} grad_year={"2024"} email={"lily.thornton@wheelergmail.org"} bio={"He's a bird, she's a plane, they're lily thornton!"} img={lilypic}></Normie>
                <Normie name={"Griffin Haismann"} grad_year={"2025"} email={"griffin.haismann@wheelergmail.org"} bio={"He's a bird, he's a plane, he's a griffin!"} img={griffinpic}></Normie>
                <Normie name={"Seoyon Kim"} grad_year={"2025"} email={"seoyon.kim@wheelergmail.org"} bio={"She's a bird, she's a plane, she's seoyon kim!"} img={seoyonpic}></Normie>
                <Normie name={"Isabelle Page"} grad_year={"2025"} email={"isabelle.idkherlastname@wheelergmail.org"} bio={"She's a bird, she's a plane, she's isabelle!"} img={isabellepic}></Normie>
                {/* <Normie name={"Jackson Page"} grad_year={"2025"} email={"jackson.page@wheelergmail.org"} bio={"He's a bird, he's a plane, he's jackson page!"} img={"../../images/Portraits/Jackson.jpg"}></Normie> */}
                {/* <Normie name={"Charlie Shea"} grad_year={"2025"} email={"charlie.shea@wheelergmail.org"} bio={"He's a bird, he's a plane, he's charlie shea!"} img={"../../images/Portraits/Charlie.jpg"}></Normie> */}
                <Normie name={"Sam Kurtis"} grad_year={"2022"} email={"sam.kurtis@wheelergmail.org"} bio={"He's a bird, he's a plane, he's sam kurtis!"} img={sampic}></Normie>
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
                    <img src={step2} width={200}></img>
                  </li>
                  <li>
                    <p>Next, select your donation amount.</p>
                    <img src={step1} width={260}></img>
                  </li>
                  <li>
                    <p>After that, select <u><i>Robotics World Champion Sponsorship</i></u> as the designation.</p>
                    <img src={step4} width={270}></img>
                  </li>
                  <li>
                    <p>Finally, secure your payment!</p>
                    <img src={step5} width={220}></img>
                  </li>
                </ol>
                <hr></hr>
                <div>
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScan6HDMH5laWBZs8HrQ2481wpCBnC5ps6YhN_XwIybk4J88w/viewform?embedded=true" width="300" height="900" style={{overflow: "hidden"}} frameBorder="0">Loading…</iframe>
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
            <iframe src="https://wheelerrobotics.github.io/Engineering%20Portfolio%202021-2022.pdf" height={500} style={{overflow: "hidden"}} frameBorder="0">Loading…</iframe>
            
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
