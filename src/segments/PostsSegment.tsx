import * as React from "react";
import Post from "../components/Post";
import statesimg from "../images/stateswin.jpg";
import worldsimg from "../images/worlds.jpg";
import clubimg from "../images/club.jpg";

function PostsSegment() {
  return (
    <div className="posts_area">
      {/*  <Post
        title={"If you're thinking about joining, read this!"}
        subtitle={""}
        author={"daniel duarte-baird"}
        date={"9/6/22"}
        img={clubimg}
      >
        If you want to checkout what FIRST FTC (the leage we compete in) is,
        check out the <a href="##work">our work</a> page.
        <br></br>
        <br></br>
        <h2>What you could work on!</h2>
        If you want to join the robotics team, THATS GREAT. Robotics seems like
        a club that is very stem oriented, and for some things it is, but there
        are some parts you don't need to be a "stem person" to help with. Below
        are the main parts of the team, this list is certainly not exhaustive,
        and if you want to work on multiple of these things, then go for it!
        <br></br>
        <br></br>
        <h3>Building</h3>
        When we build, we aren't given an instruction book like with a lego set,
        instead we have to come up with a design, and think creatively to figure
        out solutions to engineering problems. We build a robot to score points
        in a new game (created by FIRST) each year. We strive to use the
        engineering design process in our building, and are always trying to
        plan before putting things together, whether that means CAD or a
        drawing. All of this is documented in our engineering portfolio.
        <br></br>
        <br></br>
        <h3>Outreach</h3>
        FIRST is all about spreading their ideals of Coopertition, Gracious
        Professionalism, and other ones you can find on their website. In order
        to satisfy this part of first, people look for oppurtunitys where we can
        showcase our robot or what we do outside of wheeler. This can be very
        influential on our overall score at states, especially in relation to
        the INSPIRE award which is awarded to the team that all around is best.
        <br></br>
        <br></br>
        <h3>Portfolio and Organization</h3>
        To organize our work and present it to the judges we make an engineering
        portfolio. This is written in part by the people who build the robot or
        work on the aspects presented within the portfolio, but also by some
        other people with an eye for graphic design. A good portfolio can score
        some solid points on judging.
        <br></br>
        <br></br>
        <h3>CAD</h3>
        CAD, or compute aided design, is the means by which we can design custom
        parts and even whole robots. We use fusion 360 to design things and it
        can be extremely useful to figure out if something will work without
        building it first.
        <br></br>
        <br></br>
        <h3>Programming (the best one)</h3>
        Programming is pretty much giving the robot instructions, if you like
        math, you'll love this. We use java to program our robot, which is not a
        great language in my opinion, but you will be given the chance to learn,
        and it could be even easier if you already know another language.
        Programming is a lot of math, because much of it relates to figuring out
        where we are on the field (localization) and how to get where we want to
        go/do what we want to do. All of this must be precise inside of an
        environment (the playingfield) and using a robot which may be slightly
        different (meaning how the robot is lined up, or a wheel acting funny)
        each time the program is run. I think its really fun and you should
        totally learn to code!
        <br></br>
        <br></br>
        <h2>Meeting</h2>
        We meet on tuesdays at enrichment and also will be having two optional
        afterschool practices a week (one will prob be on friday). These are the
        designated times for robotics, but if you really want to work on
        something at a different time, ask Mr. Ryder in the dib lab if you can
        work on robotics and he will probably have a free time when you can do
        so.
      </Post> */}
      <Post
        title={"Electric Quahogs Go To Worlds!"}
        subtitle={""}
        author={"daniel duarte-baird"}
        date={"9/6/22"}
        img={worldsimg}
      >
        For the entire season, we have been working hard, and that hard work
        culminated in a win at the state championship allowing us to go to
        worlds. At first we were like "Yay", then we were like "Ahh thats a lot
        of money we need", but then Mr Harris (living legend) got us a bunch of
        wheeler's money and we took the trip to Houston.
        <br></br>
        <br></br>
        We had a great time there meeting other teams and competing. It was a
        lot less stressful because we were just there to have fun and not to win
        (we knew we weren't good enough). We got to meet cool people and see
        cool robots. We also stopped by the FRC place for a while which was
        really cool to watch (if you wanna know what FRC is then figure it out
        yourself).
        <br></br>
        <br></br>
        It was an incredible experience, and we placed in the top half (72nd out
        of 160). That's great.
        <br></br>
        <br></br>
        The end (this ones short because I don't feel like writing much, also I
        think lily's gonna make a vlog or smth but idk).
      </Post>
      <Post
        title={"Electric Quahogs Win States!"}
        subtitle={""}
        author={"daniel duarte-baird"}
        date={"3/5/22"}
        img={statesimg}
      >
        Over the past few months, the electric quahogs have been working hard
        designing, building, and programming a robot to compete in the FIRST®
        Tech Challenge Robotics Competiton. This competiton took place on
        Saturday, March 5th, and the Electric Quahogs ended up winning, with an
        undefeated streak of 10-0.
        <br />
        <br />
        The competing robot, named Robot0 featured an arm and claw as well as a
        spinner and mecanum drivetrain. Each component and part was engineered
        and tested so that we could be sure they would work for what we designed
        them in the real competiton. The most astounding thing about the win was
        the fact that the robot's parts did not break a single time (except for
        some human error I will get to later). The engineering and testing of
        the team clearly payed off for the team, being able to take the
        championship in the end.
        <br />
        <br />
        In addition to the engineering of the robot, the Electric Quahogs also
        had solid op-modes for both the Tele-Op period and the Autonomous
        period. Possibly the most advanced part of the program was the system of
        object detection with a webcam and custom color isolation algorithm.
        This was able to pinpoint the location of our team scoring element each
        time and place our block on the corresponding level. This was a large
        advantage for us, for it scored an extra 20 points for the team.
        <br />
        <br />
        The most scary round was match 6. In this match, the driveteam checked
        the battery as they always did, and realized it was almost below their
        threshold for a new one (13v), but not quite. They went with it anyways,
        because they set their threshold high on purpose, so they would not have
        to worry at all about battery death. After initiating the autonomous
        op-mode, the battery started rapidly declining, and once the game
        started, there was not enough current for more than two motors to move
        at once. Despite this, the Electric Quahogs, with their alliance
        partners, were barely able to squeak out a win, scoring a couple blocks
        and a few ducks in endgame.
        <br />
        <br />
        After match 6, the Electric Quahogs were #1 seed and able to draft a
        their tournament alliance partner first. Both partner teams ended up
        being teams from Shea High School (as seen in the picture above). With
        their alliance partners, the Electric Quahogs made it all the way to the
        finals and won their way to the world championship.
      </Post>
      <Post
        title={"Electric Quahogs Go To Worlds!"}
        subtitle={""}
        author={"daniel duarte-baird"}
        date={"9/6/22"}
        img={worldsimg}
      >
        For the entire season, we have been working hard, and that hard work
        culminated in a win at the state championship allowing us to go to
        worlds. At first we were excited, and then realized the huge undertaking
        that worlds would be. We were eventually able to scrape together the
        money through a mix of fundraising, donations, and help from wheeler,
        and were able to go to Houston to participate in the competition.
        <br></br>
        <br></br>
        We had a great time there meeting other teams and competing. It was a
        lot less stressful because we were just there to have fun and not to
        win. We got to meet interesting people and see innovative robots. We
        also stopped by the FRC competition for a while which was interesting to
        watch.
        <br></br>
        <br></br>
        It was an incredible experience, and we placed in the top half (72nd out
        of 160). We had a great time and hope we are able to make it back next
        year.
      </Post>
      <Post
        title={"Electric Quahogs Win States!"}
        subtitle={""}
        author={"daniel duarte-baird"}
        date={"3/5/22"}
        img={statesimg}
      >
        Over the past few months, the electric quahogs have been working hard
        designing, building, and programming a robot to compete in the FIRST®
        Tech Challenge Robotics Competiton. This competiton took place on
        Saturday, March 5th, and the Electric Quahogs ended up winning, with an
        undefeated streak of 10-0.
        <br />
        <br />
        The competing robot, named Robot0 featured an arm and claw as well as a
        spinner and mecanum drivetrain. Each component and part was engineered
        and tested so that we could be sure they would work for what we designed
        them in the real competiton. The most astounding thing about the win was
        the fact that the robot's parts did not break a single time (except for
        some human error I will get to later). The engineering and testing of
        the team clearly payed off for the team, being able to take the
        championship in the end.
        <br />
        <br />
        In addition to the engineering of the robot, the Electric Quahogs also
        had solid op-modes for both the Tele-Op period and the Autonomous
        period. Possibly the most advanced part of the program was the system of
        object detection with a webcam and custom color isolation algorithm.
        This was able to pinpoint the location of our team scoring element each
        time and place our block on the corresponding level. This was a large
        advantage for us, for it scored an extra 20 points for the team.
        <br />
        <br />
        The most scary round was match 6. In this match, the driveteam checked
        the battery as they always did, and realized it was almost below their
        threshold for a new one (13v), but not quite. They went with it anyways,
        because they set their threshold high on purpose, so they would not have
        to worry at all about battery death. After initiating the autonomous
        op-mode, the battery started rapidly declining, and once the game
        started, there was not enough current for more than two motors to move
        at once. Despite this, the Electric Quahogs, with their alliance
        partners, were barely able to squeak out a win, scoring a couple blocks
        and a few ducks in endgame.
        <br />
        <br />
        After match 6, the Electric Quahogs were #1 seed and able to draft a
        their tournament alliance partner first. Both partner teams ended up
        being teams from Shea High School (as seen in the picture above). With
        their alliance partners, the Electric Quahogs made it all the way to the
        finals and won their way to the world championship.
      </Post>
      <Post
        title={"Website Creation!"}
        subtitle={"The best post!"}
        date={"the beginning"}
        author={"daniel duarte-baird"}
        img={
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunrise-quotes-21-1586892331.jpg"
        }
      >
        For the first time ever, the Electric Quahogs have a place to document
        their progress and share what their team is all about (we also have an
        insta, but ignore that).
        <br />
        <br />
        The Electric Quahogs strive to embody first's values, and this website
        helps us share our doings with the rest of our community. It also allows
        potential new members to see what we do and if they would want to take
        part.
        <br />
        <br />
        We knew that we needed to make our website special for it to be truly
        ours, so we coded the entire thing ourselves. Despite taking a long
        time, it was an enjoyable process. In programming it, we imbued it with
        our team spirit and our values. We made it for us as much as for others.
        <br />
        <br />
        We aimed to create a versatile platform on which we could easily post
        about our progress, as well as document what we had accomplished. We
        decided on 3 pages to start:
        <br />
        <br />
        <br />
        First, we made a home page.
        <br />
        <p style={{ marginLeft: "2%" }}>
          This page gives us a place to post about our progress as well as a
          place to feature our sponsors and feature our other platforms such as
          github.
        </p>
        <br />
        Second, we made an about us page <br />
        <p style={{ marginLeft: "2%" }}>
          This page shares about each member of the team, providing a short bio
          and pictures for each member, letting people see who we are rather
          than just what we do.
        </p>
        <br />
        Third, we made an our work page <br />
        <p style={{ marginLeft: "2%" }}>
          This page allows us to share our finished work such as our engineering
          portfolio.
        </p>
        <br />
        We hope that each of these pages can provide insight onto what we do and
        provide resources that people can use to learn about us.
        <br />
        <br />
        Another key feature of the website is the opportunity to acknowledge and
        advertise our sponsors. We have a sidebar (or dropdown on mobile)
        showing all of them as well as a matterjs rendered and simulated
        interactive footer at the bottom. This footer has logos of our sponsors
        on some of the blocks.
        <br />
        <br />
        Now for a more technical overview (can you tell I'm the coder yet?)
        <br />
        This website is build on a framework called React and hosted with github
        pages. I used to use this static site generator called gatsby, but it
        was kinda a hassle, so I changed it as of Sep 6 2022. Also, I used
        matterjs to render the footer (look down there, it took me way to long
        to make).
      </Post>
    </div>
  );
}

export default PostsSegment;
