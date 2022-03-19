import * as React from "react"
import Post from "../components/Post"
import statesimg from '../images/stateswin.jpg'

function PostArea() {
        return <div className="posts_area">
            <Post title={"Electric Quahogs Win States!"} subtitle={""} author={"daniel duarte-baird"} date={"3/5/22"} img={statesimg}>
            Over the past few months, the electric quahogs have been working hard designing, building, and programming a robot to compete in the FIRST® Tech Challenge Robotics Competiton. 
            This competiton took place on Saturday, March 5th, and the Electric Quahogs ended up winning, with an undefeated streak of 10-0.

            <br/>
            <br/>
            The competing robot, named Robot0 featured an arm and claw as well as a spinner and mecanum drivetrain.
            Each component and part was engineered and tested so that we could be sure they would work for what we designed them in the real competiton.
            The most astounding thing about the win was the fact that the robot's parts did not break a single time (except for some human error I will get to later).
            The engineering and testing of the team clearly payed off for the team, being able to take the championship in the end.
            <br/>
            <br/>
            In addition to the engineering of the robot, the Electric Quahogs also had solid op-modes for both the Tele-Op period and the Autonomous period.
            Possibly the most advanced part of the program was the system of object detection with a webcam and custom color isolation algorithm. 
            This was able to pinpoint the location of our team scoring element each time and place our block on the corresponding level. 
            This was a large advantage for us, for it scored an extra 20 points for the team.
            <br/>
            <br/>
            The most scary round was match 6. In this match, the driveteam checked the battery as they always did, and realized it was almost below their threshold for a new one (13v), but not quite.
            They went with it anyways, because they set their threshold high on purpose, so they would not have to worry at all about battery death.
            After initiating the autonomous op-mode, the battery started rapidly declining, and once the game started, there was not enough current for more than two motors to move at once. 
            Despite this, the Electric Quahogs, with their alliance partners, were barely able to squeak out a win, scoring a couple blocks and a few ducks in endgame.
            <br/>
            <br/>
            After match 6, the Electric Quahogs were #1 seed and able to draft a their tournament alliance partner first. 
            Both partner teams ended up being teams from Shea High School (as seen in the picture above).
            With their alliance partners, the Electric Quahogs made it all the way to the finals and won their way to the world championship.
            <br/>
            <br/>
            This presented another problem though. Worlds this year is in Houston, Texas, and getting there is going to be expensive.
            This is why we need your help. If you look at our <u><i>give</i></u> page, you can find instructions on how to help us raise enough money to get to the championship.
            </Post>
            <Post title={"Website Creation!"} subtitle={"The best post!"} date={""} author={"daniel duarte-baird"} img={""}>
            For the first time ever, the Electric Quahogs have a place to document their progress and share what their team is all about.
            <br/>
            <br/>
            The Electric Quahogs strive to embody first's values, and this website helps us share our doings with the rest of our community. 
            It also allows potential new members to see what we do and if they would want to take part.
            <br/>
            <br/>
            We knew that we needed to make our website special for it to be truly ours, so we coded the entire thing ourselves. 
            Despite taking a long time, it was an enjoyable process. 
            In programming it, we imbued it with our team spirit and our values. We made it for us as much as for others.
            <br/>
            <br/>
            We aimed to create a versatile platform on which we could easily post about our progress, as well as document what we had accomplished.
            We decided on 4 pages to start:
            <br/>
            <br/>
            <br/>
            First, we made a home page.<br/>
            <p style={{marginLeft: "2%"}}>
            This page gives us a place to post about our progress as well as a place to feature our sponsors and feature our other platforms such as github.
            </p>
            <br/>
            Second, we made an about us page <br/>
            <p style={{marginLeft: "2%"}}>
            This page shares about each member of the team, providing a short bio and pictures for each member, letting people see who we are rather than just what we do.
            </p>
            <br/>
            Third, we made an our work page <br/>
            <p style={{marginLeft: "2%"}}>
            This page allows us to share our finished work such as our engineering portfolio.
            </p>
            <br/>
            Fourth, we made a giving page <br/>
            <p style={{marginLeft: "2%"}}>
            As we are making this website, we are also trying to get enough money to go to worlds. 
            Showing people how they can give and how thankful we are towards those who do truly gives people a reason for people to help us.
            </p>
            <br/>
            We hope that each of these pages can provide insight onto what we do and provide resources that people can use to learn about us.

            <br/>
            <br/>
            Another key feature of the website is the opportunity to acknowledge and advertise our sponsors.
            We have a sidebar (or dropdown on mobile) showing all of them as well as a matterjs rendered and simulated interactive footer at the bottom.
            This footer has logos of our sponsors on some of the blocks.

            <br/>
            <br/>
            Now for a more technical overview (can you tell I'm the coder yet?)<br/>
            This website is build on a framework called React and served with a SSG (static site generator).
            The SSG we used is called Gatsby and is a versatile platform which also provides cloud hosting which the website runs on.
            Gatsby also allows for much faster loading times than your average browser rendered site, because it uses an SSR (server side renderer).
            This SSR builds the website for the browser, making serving it much less labor intensive on the browser's side.


            </Post>
      </div>
}

export default PostArea