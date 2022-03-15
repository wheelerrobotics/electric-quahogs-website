import * as React from "react"
import "../../public/css/styles.css"
import NaviButton from "../../public/static/NaviButton";
import Navi from "../../public/static/Navi";
import Post from "../../public/static/Post";
import Leader from "../../public/static/Leader";
import PeopleBox from "../../public/static/PeopleBox";
import "../../public/static/Normie";
import PeopleCarousel from "../../public/static/PeopleCarousel";
import TextBox from "../../public/static/TextBox";
import { Normie, select } from "../../public/static/Normie";
import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Document, Page } from 'react-pdf';
// styles
const pageStyles = {
  color: "rgb(100, 100, 100)",
};


// data
const links = [
  
]

// markup
const IndexPage = () => {
  return (

  <main>
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
            <div className="posts_area">
              <Post title={"Initial Commit"} subtitle={"How we became a team"} date={"11/19/20"} img={"https://i.vimeocdn.com/video/1100868839-c27cae7588087e5630afd15af9590d256842a20bf742b4f0cf793b8e64ae3ac4-d?mw=1000&mh=563&q=70"}>
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
              <Post title={"Initial Commit"} subtitle={"How we became a team"} date={"11/19/20"} img={"https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1-3000x2000.jpg"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod in, neque consequuntur animi recusandae atque asperiores beatae saepe nemo quam! Ipsam sit consequatur veniam amet minus fuga quam accusamus eos.
              </Post>
              <Post title={"Initial Commit"} subtitle={"How we became a team"} date={"11/19/20"} img={"https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1-3000x2000.jpg"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, asperiores dolores? Iste facere facilis optio maiores amet nostrum corrupti aut minus, dicta explicabo, ex ratione a enim ab. Nihil, dolor.
              </Post>
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
              <Leader name={"William Kopans"} grad_year={"2022"} email={"william.kopans@wheelergmail.org"} bio={"He's a bird, he's a plane, he's will kopans!"} img={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/814/873/datas/xlarge.png"}></Leader>
              <Leader name={"Mayte Segura"} grad_year={"2022"} email={"mayte.segura@wheelergmail.org"} bio={"SHe's a bird, she's a plane, she's mayte segura!"} img={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/814/873/datas/xlarge.png"}></Leader>
            </PeopleBox>
            </div>
            <TextBox title={"About Us"}> We are the electric quahogs! yay! </TextBox>
              <PeopleCarousel>
                <Normie name={"William Kopans"} grad_year={"2022"} email={"william.kopans@wheelergmail.org"} bio={"He's a bird, he's a plane, he's will kopans!"} img={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/814/873/datas/xlarge.png"}></Normie>
                <Normie name={"William Kopans"} grad_year={"2022"} email={"william.kopans@wheelergmail.org"} bio={"He's a bird, he's a plane, he's will kopans!"} img={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/814/873/datas/xlarge.png"}></Normie>
                <Normie name={"William Kopans"} grad_year={"2022"} email={"william.kopans@wheelergmail.org"} bio={"He's a bird, he's a plane, he's will kopans!"} img={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/814/873/datas/xlarge.png"}></Normie>
                <Normie name={"William Kopans"} grad_year={"2022"} email={"william.kopans@wheelergmail.org"} bio={"He's a bird, he's a plane, he's will kopans!"} img={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/814/873/datas/xlarge.png"}></Normie>
                <Normie name={"William Kopans"} grad_year={"2022"} email={"william.kopans@wheelergmail.org"} bio={"He's a bird, he's a plane, he's will kopans!"} img={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/814/873/datas/xlarge.png"}></Normie>
                <Normie name={"William Kopans"} grad_year={"2022"} email={"william.kopans@wheelergmail.org"} bio={"He's a bird, he's a plane, he's will kopans!"} img={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/814/873/datas/xlarge.png"}></Normie>
                <Normie name={"William Kopans"} grad_year={"2022"} email={"william.kopans@wheelergmail.org"} bio={"He's a bird, he's a plane, he's will kopans!"} img={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/814/873/datas/xlarge.png"}></Normie>
                <Normie name={"William Kopans"} grad_year={"2022"} email={"william.kopans@wheelergmail.org"} bio={"He's a bird, he's a plane, he's will kopans!"} img={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/814/873/datas/xlarge.png"}></Normie>
                <Normie name={"William Kopans"} grad_year={"2022"} email={"william.kopans@wheelergmail.org"} bio={"He's a bird, he's a plane, he's will kopans!"} img={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/814/873/datas/xlarge.png"}></Normie>
              </PeopleCarousel>
          </div>
        <div className="people_area">
          man, theres so many thing that are interesting about us :)
        </div>
      </div>
      <div id="give" hidden>
        <div className="title_area">
            <h1>How <i>You</i> Can Help</h1>
          </div>
        <div className="give_div">
          this is where they learn how to "contribute" to our team, whatever that means
        </div>
      </div>
      <div id="feedback">
        <div style={{ marginTop: "10%" }}>
          <p>suggestions go here :)</p>
          <input id="suggestions" placeholder="this doesnt actually do anything"></input>
        </div>
      </div>
      <div id="work">
        <div className="title_area">
          <h1>What We Have Done</h1>
        </div>
        <div id="page_area">
          <TextBox title={"Our Portfolio"}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
            <div
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    height: '700px',
                    width: "40%",
                }}
            >
              <Viewer fileUrl="Engineering Portfolio 2021-2022.pdf" defaultScale={SpecialZoomLevel.PageFit} />
              </div>
            </Worker>   
          </TextBox>
        </div>
      </div>
    </div><div className="footer">
        this can be where all the sponsors and other footer stuff goes
      </div>
      



    </main>

  );
}

export default IndexPage
