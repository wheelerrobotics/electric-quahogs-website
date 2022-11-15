import * as React from "react";
import SideBar from "../components/SideBar";
import SideBarButton from "../components/SideBarButton";
import isBrowser from "../helpers/isBrowser";

function SideMenuSegment() {
  return (
    <SideBar
      title={
        isBrowser()
          ? window.innerWidth > 600
            ? "Loving The Electic Quahogs?"
            : ""
          : ""
      }
    >
      <SideBarButton title={"Latest News!"} redirect={"news"}></SideBarButton>
      <SideBarButton
        title={"Our Github!"}
        redirect={"https://github.com/wheelerrobotics"}
      ></SideBarButton>
      {/* <SideBarButton title={"Sign Up!"} redirect={"https://docs.google.com/forms/d/e/1FAIpQLSdnxH2JlEnOVB2kW3c0EjCPh8TfeSSj3Itm8qfXFJKTSbQPfA/viewform"}></SideBarButton> */}
      <SideBarButton
        title={"RoboGUI!"}
        redirect={"https://wheelerrobotics.github.io/RoboGUI/"}
      ></SideBarButton>
    </SideBar>
  );
}

export default SideMenuSegment;
