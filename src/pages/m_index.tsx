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


import logo from "../favicon/logotrans.png"
import logofull from "../favicon/logofulltrans.png"

import Helm from "../components/Hemlet";
import PostsSegment from "../segments/PostsSegment";

import statesimg from '../images/stateswin.jpg'
import LeadershipSegment from "../segments/LeadershipSegment";
import PeopleCarouselSegment from "../segments/PeopleCarouselSegment";
import AboutSegment from "../segments/AboutSegment";
import FooterSegment from "../segments/FooterSegment";
import NewsPanelSegment from "../segments/NewsPanelSegment";
import NavBarSegment from "../segments/NavBarSegment";
import SponsorSegment from "../segments/SponsorSegment";
import SideMenuSegment from "../segments/SideMenuSegment";
import GiveInstructionsSegment from "../segments/GiveInstructionsSegment";
import PortfolioSegment from "../segments/PortfolioSegment";
// styles
const pageStyles = {
  color: "rgb(100, 100, 100)",
};

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
      <NavBarSegment></NavBarSegment>
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
                  <SponsorSegment></SponsorSegment>
                </span>
              </div>
              <div style={{position: "absolute", display: 'flex', flexDirection: "column"}}>
                <button style={{width: '100px', height: '40px', backgroundColor: 'darkgray'}} onClick={(e)=>{
                  e!.currentTarget!.parentElement!.querySelector('span')!.hidden = !e!.currentTarget!.parentElement!.querySelector('span')!.hidden;
                  e.currentTarget.style.backgroundColor = e.currentTarget.style.backgroundColor == 'gray' ? 'darkgray' : 'gray';
                  //e.currentTarget.innerHTML[e.currentTarget.innerHTML.length-1] = e.currentTarget.innerHTML[e.currentTarget.innerHTML.length-1] == '\u02C3' ? '\u02C5' : '\u02C3';
                  
                }}>more!</button>
                <span hidden>
                  <SideMenuSegment></SideMenuSegment>
                </span>
              </div>
              <PostsSegment></PostsSegment>
              
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

export default IndexPage
