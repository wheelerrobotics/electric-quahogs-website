import * as React from "react"
import "../css/styles.css"
import "../css/mobile/m_styles.css"
import "../helpers/inter.ts";

import logo from "../favicon/logotrans.png"
import logofull from "../favicon/logofulltrans.png"

import Helm from "../components/Hemlet";
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
import WillKopansSegment from "../segments/WillKopansSegment";
import WillKopansIsBackSegment from "../segments/WillKopansIsBackSegment";

// styles
function mobileCheck() {
  if(window.innerWidth < 600) location.href = '/m_index';
}


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
              <img alt="Electric Quahogs Logo!" src={isBrowser() ? window.innerWidth < 600 ? logofull : logo : logofull} height={200} style={{marginBottom: "2%"}}></img><h1 hidden={isBrowser() ? window.innerWidth < 600 ? true : false : false}>Electric Quahogs!</h1>
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
          <h1>What We Do</h1>
        </div>
        <div id="page_area">
          <WillKopansSegment></WillKopansSegment>
          <WillKopansIsBackSegment></WillKopansIsBackSegment>
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
