import React from "react";
import "./about.css";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";

function About() {
  return (
    <div id="about">
      <div className="about-title">
        <h2>About me</h2>
      </div>

      <div className="about">
        <div className="about-summary">
          <div class="about-text">
            <h3>Hello there! 👋 </h3>
            <p>
              <b>I'm Sujit Pawar </b> I'm an Inquisitive indivisual who thrives on learning new things and pushing boundaries. As an aspiring analyatical 
              chemist ,I am deeply fascinated by the diverese by applications of analytical techniques
              and their impact on various industries . 
              I possess a strong drive to understand  the intricacies of
               different analytical process and their practical implementation .
              Feel  free to reach out for discussions, collaborations, or just a
              friendly chat about anything! 😊
            </p>
          </div>
          <br />
          <br />
          <div className="contactbutton">
            <div className="text-buttons">
              {/* <a href="sahilpawar2023.pdf" class="t-btns" download>
                Contact me
              </a> */}
              <Link
                className="t-btns"
                to="contacts"
                smooth={true}
                duration={500}
                offset={-80}
              >
                Contact Me
              </Link>
            </div>
            <div className="social-links">
              <div className="linkdin">
                <a href="https://www.instagram.com/sujit_pawar_28/?igsh=MW83aGh6MWxpeTdlZg%3D%3D/">
                  <InstagramIcon className="icon-color" />
                </a>
              </div>
              <div className="instagram ">
                <a href="https://www.linkedin.com/in/sujit-pawar-824046166?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <LinkedInIcon className="icon-color" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-info">
          <div className="section1">
            <div className="info-item padd-15">
              <p>
                Name : <span>Pawar Sujit Shubhash</span>
              </p>
            </div>
            <div className="info-item padd-15">
              <p>
                Age : <span>24</span>
              </p>
            </div>
            <div className="info-item padd-15">
              <p>
                Birthday : <span>28 Sept 2000</span>
              </p>
            </div>

            <div className="info-item padd-15 ">
              <p>
                Email : <span>pawarsujit302@gmail.com</span>
              </p>
            </div>
            <div className="info-item padd-15">
              <p>
                Degree : <span>MSC(Analytic Chemistry)</span>
              </p>
            </div>
          </div>

          <div className="section2">
            <div className="info-item padd-15">
              <p>
                Phone : <span>+91 7038895312</span>
              </p>
            </div>
            <div className="info-item padd-15 ">
              <p>
                website : <span>https://domain.com</span>
              </p>
            </div>
            <div className="info-item padd-15">
              <p>
                Freelance : <span>Available</span>
              </p>
            </div>
            <div className="info-item padd-15">
              <p>
                Current Location : <span>Navi Mumbai</span>
              </p>
            </div>
            <div className="info-item padd-15">
              <p>
                Base Location : <span>Patan,Satara</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="qualification">
        <div className="eduaction">
          <h4>
            <i class="fa fa-graduation-cap" aria-hidden="true"></i> Education
          </h4>
          <div className="timeline-box">
            {/* timeline */}
            <div className="timeline shadow-dark">
              <div className="timeline-item">
                <div class="circle-dot"></div>
                <div className="timeline-date">
                  <i class="fa fa-calendar"></i>  2021 -  2023
                </div>
                <div className="timeline-title">
                  Master of Science (Analytical Chemistry), <br /> Karmveer Bhaurao Patil College, <br />
                  Vashi, Mumbai University | 9.48 CGPA |
                </div>
                <div className="timeline-desc">
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit atque recusandae exercitationem consectetur temporibus
                    quia eius aliquid quis dolore ipsum.
                  </p> */}
                </div>
              </div>
              
              <div className="timeline-item">
                <div class="circle-dot"></div>
                <div className="timeline-date">
                  <i class="fa fa-calendar"></i> June 2018 - August 2021
                </div>
                <div className="timeline-title">
                  Bachelor of Science  (Chemistry), <br /> Shivaji University,
                  Kolhapur | 75.28 % |
                </div>

              </div>
              <div className="timeline-item">
                <div class="circle-dot"></div>
                <div className="timeline-date">
                  <i class="fa fa-calendar"></i> June 2016 - Feb 2018
                </div>
                <div className="timeline-title">
                  Higher Secondary Certificate (PCMB), <br /> Balasaheb Desai College,
                  Patan <br />
                  Maraharshtra State Board |  70.00 % |
                </div>

              </div>

              <div className="timeline-item">
                <div class="circle-dot"></div>
                <div className="timeline-date">
                  <i class="fa fa-calendar"></i> June 2016
                </div>
                <div className="timeline-title">
                  Secondary School Certificate (SSC), <br /> Balasaheb Desai Vidyalaya,
                  Kusrund <br />
                  Maraharshtra State Board |  93.40 % |
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="experience">
          <h4>
            <i class="fa fa-briefcase" aria-hidden="true"></i> Experience
          </h4>
          <div className="timeline-box">
            {/* timeline */}
            <div className="timeline shadow-dark">
              <div className="timeline-item">
                <div class="circle-dot"></div>
                <div className="timeline-date">
                  <i class="fa fa-calendar"></i> June 2023 - Current
                </div>
                <div className="timeline-title">
                  Technical Officer -
                  Anlaytical Service Department, <br /> Nerolac Paints , Navi Mumbai .
                </div>
                <div className="timeline-desc">
                <p>
                    Performing detailed testing and anlyasis of all the types of raw materials ,
                    used in the paints industry to assess their quality , composition , and performance characteristics.
                   <br/> <br />
                    Developing and implementing quality control procedures 
                    and protocols to maintain constitency and realibility in anlysis process by using SAP program<br/> <br />

                    Generating accurate reports and documentation of test result , highlighting any deviation or issues for further invistagation and resolution .
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div class="circle-dot"></div>
                <div className="timeline-date">
                  <i class="fa fa-calendar"></i> July 2022 - August 2022
                </div>
                <div className="timeline-title">
                  Intern -
                  Anlaytical  Department, <br /> R & D Centre of Cleanchem Laboratories , LLP , Navi Mumbai .
                </div>
                <div className="timeline-desc">
                  <p>
                    Asissted senior chemists in conducting experiments , analyzing samples , and recording data <br /> <br />
                    Prepared solution and samples for analysis following standard operation . <br /><br />
                    Collaborted with team members to troubleshoot technical issues and improve lab effciency.
                    <br /><br />
                    Maintaining daily log book entries .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="certifications">
        <h4>
          <i class="fa fa-certificate" aria-hidden="true"></i>
          Certifications & Participations
        </h4>
        <div className="certification-box shadow-dark">
          <p>
            <b>1</b> <s>:</s>
            <span>
              Certificate in poster presentation entitled 'Studies On The Synthesis Of 'Ammine Carbonato Series Of Zinc and Mangenese' .
            </span>
          </p>
          <p>
            <b>2</b> <s>:</s>
            <span>
             Participate in Water & Soil Analysis Career Oriented Course .
            </span>
          </p>
          <p>
            <b>3</b> <s>:</s>
            <span>
            Certificate of participation in the 'International Conference On Advanced Materials For Physical ,Chemical and Biological Application' .
            </span>
          </p>
          <p>
            <b>4</b> <s>:</s>
            <span>
            Certificate in Household Chemicals Career Oriented Course  .
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
