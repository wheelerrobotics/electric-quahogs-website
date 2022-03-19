import * as React from "react"
import SideBar from "../components/SideBar"
import SideBarButton from "../components/SideBarButton"

function SideMenuSegment() {
        return <SideBar title={window ? (window.innerWidth > 600) ? "Loving The Electic Quahogs?" : "" : ""}>
                    <SideBarButton title={"Latest News!"} redirect={"news"}></SideBarButton>
                    <SideBarButton title={"Our Github!"} redirect={"https://github.com/wheelerrobotics"}></SideBarButton>
                    <SideBarButton title={"Sign Up!"} redirect={"https://docs.google.com/forms/d/e/1FAIpQLSdnxH2JlEnOVB2kW3c0EjCPh8TfeSSj3Itm8qfXFJKTSbQPfA/viewform"}></SideBarButton>
                    <SideBarButton title={"Will Kopans!"} redirect={"https://www.linkedin.com/in/william-kopans"}></SideBarButton>
                </SideBar>
}

export default SideMenuSegment