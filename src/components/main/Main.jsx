import React from "react";
import "./main.css";
import Navbar from "../navbar/Navbar";
import photo from "../../assets/myprofile.jpg";
import resume from "../../assets/sahilpawar2023 (3).pdf";
import About from "../About/About";
import Contact from "../contact/Contact";
import Stack from "../techStack/Stack";
import Projects from "../Projects/Projects";
import MyPresentation from "../Presentation/MyPresentation";
import GitHubCalendar from "react-github-calendar";
import Gallery from "../Gallery/Gallery";

function Main() {
  return (
    <>
      <Navbar />
      <div id="main">
        <div className="banner">
          <div className="text-with-image">
            <div className="mobile-image">
              <img src={photo} alt="profile_photo" />
            </div>
            <div className="text">
              <h1 className="web-header">
                Hi👋, <br />I am <span class="name">Sujit Pawar</span> <br />
                <span className="animate-charcter">a Technical Officer</span>
              </h1>

              <h1 className="mobh1">
                I am <span className="animate-charcter"> Sujit Pawar</span>
              </h1>
              <p className="webtext">
                Welcome to my personal portfolio, I am <b> Sujit Pawar</b>{" "}
                <br />a <b>Technical Officer </b>
                at <b>Nerolac Paint,</b> passionate about innovation in paint
                technology.
                <br />
                Transforming visions into vibrant reality with expert paint
                solutions
                <br />
              </p>
              <p className="mobile-text">
                -This is my Official Portfolio website to shows all Details and
                Works.
              </p>
              <br />

              <div className="text-buttons">
                <a href={resume} class="t-btns" download>
                  Download RESUME
                </a>
              </div>
            </div>
            <div className="mobile-text"></div>
            <div className="image">
              <img src={photo} alt="profile_photo" />
            </div>
          </div>
          <div className="techstaks">{/* <Stack /> */}</div>
        </div>
      </div>
      <div className="main-about">
        <About />
      </div>

      <div className="myproject">
        <MyPresentation />
      </div>

      <div className="myphotos">
        <Gallery />
      </div>
      <Contact />
    </>
  );
}

export default Main;
