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
import "../helpers/inter.ts";
import {newInter} from "../helpers/inter";
import Interactive from "../components/InteractiveBackground";
import SideBar from "../components/SideBar";
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
import nathanpic from "../images/Portraits/Nathan.jpg" // ahahahahaha

import logo from "../favicon/logotrans.png"
import logofull from "../favicon/logofulltrans.png"

import step1 from "../images/step1.png"
import step2 from "../images/step2.png"
import step3 from "../images/step3.png"
import step4 from "../images/step4.png"
import step5 from "../images/step5.png"
import Helm from "../components/Hemlet";
import PostArea from "../segments/PostsSegment";
import statesimg from '../images/stateswin.jpg'
import NewsPanelSegment from "../segments/NewsPanelSegment";
import FooterSegment from "../segments/FooterSegment";
import AboutSegment from "../segments/AboutSegment";
import GiveInstructionsSegment from "../segments/GiveInstructionsSegment";
import PeopleCarouselSegment from "../segments/PeopleCarouselSegment";
import LeadershipSegment from "../segments/LeadershipSegment";
import SponsorSegment from "../segments/SponsorSegment";
import PostsSegment from "../segments/PostsSegment";
import SideMenuSegment from "../segments/SideMenuSegment";
import PortfolioSegment from "../segments/PortfolioSegment";
import isBrowser from "../helpers/isBrowser";
import NavBarSegment from "../segments/NavBarSegment";

// styles
const pageStyles = {
  color: "rgb(100, 100, 100)",
};
const news = {
  title: "BREAKING NEWS",
  subtitle: "Quahogs win states!",
  author: "daniel duarte-baird",
  date: "3/5/22",
  img: statesimg,
  content: "the quahogs have won stats, this means theyre going to worlds",
  cookie: "winstates"
}
function mobileCheck() {
  if(window.innerWidth < 600) location.href = '/m_index';
}

// data
const links = [
  
]

// markup
const IndexPage = () => {
  isBrowser() ? mobileCheck() : null;
  return (

  <main>
    <Helm></Helm>
      
      
      {/* <meta name="icon" href={logo}/> */}
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" crossOrigin="anonymous"></link>
      <script src="https://kit.fontawesome.com/64919bd2ce.js" crossOrigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"></link>
      <NavBarSegment></NavBarSegment>
      <div id="pages" >
        
        <div id="home">
          <div className="page_area">
            <div className="title_area">
              <img src={isBrowser() ? window.innerWidth < 600 ? logofull : logo : logofull} height={200} style={{marginBottom: "2%"}}></img><h1 hidden={isBrowser() ? window.innerWidth < 600 ? true : false : false}>Electric Quahogs!</h1>
            </div>
            <div className="page_body">

              <SideMenuSegment></SideMenuSegment>
              <PostsSegment></PostsSegment>
              <SponsorSegment></SponsorSegment>
            </div>
          </div>
        </div>
        <div id="about" hidden>
          <div className="title_area">
            <h1>About Us</h1>
          </div>
          <div className="people_area">

            <LeadershipSegment></LeadershipSegment>

            <AboutSegment></AboutSegment>
              
            <PeopleCarouselSegment></PeopleCarouselSegment>
          </div>
      </div>
      <div id="give" hidden>
        <div className="title_area">
            <h1>How <i>You</i> Can Help</h1>
          </div>
          <GiveInstructionsSegment></GiveInstructionsSegment>
      </div>
      <div id="work" hidden>
        <div className="title_area">
          <h1>What We Have Done</h1>
        </div>
        <div id="page_area">
          <PortfolioSegment></PortfolioSegment>

        </div>
      </div>
    </div>
    <FooterSegment></FooterSegment>
    <NewsPanelSegment></NewsPanelSegment>


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
