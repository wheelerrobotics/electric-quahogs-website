import * as React from "react";
import { Normie } from "../components/Normie";
import PeopleCarousel from "../components/PeopleCarousel";
import mylespic from "../images/Portraits/Myles.jpg";
import danielpic from "../images/Portraits/Daniel.jpg";
import henrypic from "../images/Portraits/Henry.jpg";
import beatricepic from "../images/Portraits/Beatrice.jpg";
import reedpic from "../images/Portraits/Reed.jpg";
import isabellepic from "../images/Portraits/Isabelle.jpg";
import jaidenpic from "../images/Portraits/Jaiden.jpg";
import lilypic from "../images/Portraits/Lily.jpg";
import tylerpic from "../images/Portraits/Tyler.jpg";
import seoyonpic from "../images/Portraits/Seoyon.jpg";
import griffinpic from "../images/Portraits/Griffin.jpg";
import sampic from "../images/Portraits/Sam.jpg";
import nathanpic from "../images/Portraits/Nathan.jpg"; // ahhhhh

function PeopleCarouselSegment() {
  return (
    <PeopleCarousel title="Other Members">
      {/* <Normie name={"Henry Germano"} grad_year={"2022"} email={"henry.germano@wheelergmail.org"} bio={"He's a bird, he's a plane, he's a plane!"} img={henrypic}></Normie> */}
      <Normie
        name={"Daniel Duarte-Baird"}
        grad_year={"2025"}
        email={"daniel.duarte-baird@wheelergmail.org"}
        bio={'"I coded this website"'}
        img={danielpic}
      ></Normie>
      <Normie
        name={"Beatrice Schroder"}
        grad_year={"2024"}
        email={"beatrice.schroder@wheelergmail.org"}
        bio={" "}
        img={beatricepic}
      ></Normie>
      {/* <Normie name={"Myles Johnson"} grad_year={"2023"} email={"myles.johnson@wheelergmail.org"} bio={"He's a bird, he's a plane, he's myles johnson!"} img={mylespic}></Normie> */}
      {/* <Normie name={"Reed Turner-Murray"} grad_year={"2022"} email={"reed.turner-murray@wheelergmail.org"} bio={"He's a bird, he's a plane, he's a reed!"} img={reedpic}></Normie> */}
      {/* <Normie name={"Tyler Wang"} grad_year={"2024"} email={"tyler.wang@wheelergmail.org"} bio={"He's a bird, he's a plane, he's tyler wang!"} img={tylerpic}></Normie> */}
      {/* <Normie
        name={"Jaiden Dash"}
        grad_year={"2024"}
        email={"jaiden.dash@wheelergmail.org"}
        bio={" "}
        img={jaidenpic}
      ></Normie> */}
      <Normie
        name={"Lily Thornton"}
        grad_year={"2024"}
        email={"lily.thornton@wheelergmail.org"}
        bio={" "}
        img={lilypic}
      ></Normie>
      <Normie
        name={"Griffin Haismann"}
        grad_year={"2025"}
        email={"griffin.haismann@wheelergmail.org"}
        bio={" "}
        img={griffinpic}
      ></Normie>
      {/* <Normie
        name={"Seoyon Kim"}
        grad_year={"2025"}
        email={"seoyon.kim@wheelergmail.org"}
        bio={" "}
        img={seoyonpic}
      ></Normie> */}
      {/* <Normie
        name={"Isabelle Cresensci"}
        grad_year={"2025"}
        email={"isabelle.Cresensci@wheelergmail.org"}
        bio={" "}
        img={isabellepic}
      ></Normie> */}
      {/* <Normie name={"Jackson Page"} grad_year={"2025"} email={"jackson.page@wheelergmail.org"} bio={"He's a bird, he's a plane, he's jackson page!"} img={"../../images/Portraits/Jackson.jpg"}></Normie> */}
      {/* <Normie name={"Charlie Shea"} grad_year={"2025"} email={"charlie.shea@wheelergmail.org"} bio={"He's a bird, he's a plane, he's charlie shea!"} img={"../../images/Portraits/Charlie.jpg"}></Normie> */}
      {/* <Normie name={"Sam Kurtis"} grad_year={"2022"} email={"sam.kurtis@wheelergmail.org"} bio={"He's a bird, he's a plane, he's sam kurtis!"} img={sampic}></Normie> */}
    </PeopleCarousel>
  );
}

export default PeopleCarouselSegment;
