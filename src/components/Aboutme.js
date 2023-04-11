import React, { Component } from 'react'
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { useMediaQuery } from "react-responsive";


export default class Aboutme extends React.PureComponent {
                 render() {
                   		return (
                        <React.Fragment>
                          <TextWrapper>
                            <div className="py-5">
                              <div className="container">
                                <nav class="navbar navbar-default navbar-fixed-top">
                                  <div class="container">
                                    <Link to="/">
                                      <ButtonContainer>
                                        Home
                                        
                                      </ButtonContainer>
                                    </Link>
                                    <Link to="/project">
                                      <ButtonContainer>
                                        View my work
                                        
                                      </ButtonContainer>
                                    </Link>
                                  </div>
                                </nav>

                                {/* Heading */}
                                  <div className="row">
                                    <div className="col mx-auto p-5 my-2 text-center text-title">
                                      <h1 className="capitalize font-weight-bold text-title-name">
                                        About me
                  </h1>
                                    </div>
                                  </div>

                                <div className="row">
                                  <div className="col">
                                    <img
                                      src="../../img/shairal.jpg"
                                          className=" img-style img-fluid rounded mx-auto d-block "
                                      alt="Shairal Neema"
                                        />
                                  </div> 
                                    
                                  <div className="col ">
                                    <p>
                                      <div className="text-centre">
                                        <div className="text-contact">
                                          Shairal Neema
                                          <br />
                                        </div>
                                          <p className="font-size-content">
                                        <i class="fas fa-phone"/>+1(704)-236-4308
                                        <br />
                                            <i class="far fa-envelope-open"/>
                                            
                                              shairalnm@gmail.com
                                            
                                        </p>
                                      </div>                                      
                                      </p>
                                      <div className="col pl-10 mt-2 ml-10 justified">
                                        {/* sOCIAL NETWORK ICONS */}
                                        <div className="p-5">
                                          {/* Linkedin */}
                                          <SocialIcon url="https://www.linkedin.com/in/shairal-neema-932227b2/" />
                                          {"  "} {/* Github */}
                                          <SocialIcon url="https://github.com/shairalnm" />
                                         
                                          
                                        </div>
                                        <a
                                          download
                                          href="https://github.com/shairalnm/shairalneemaportfolio/blob/master/src/Assets/ShairalNeemaResume.docx?raw=true"
                                        >
                                          <ButtonContainer>
                                            <i class="fa fa-download" /> Download
                                          Resume
                                        </ButtonContainer>
                                        </a>
                                      </div>
                                  </div>
                                  </div>
                                     
                                    <div className="row">
                                      <div className="col p-6 mt-5">
                                      <div className="text-justified text-center">
                                        <p className="font-size-content">
                                        As a highly skilled software engineer with 4.5 years of experience in .NET technologies 
                                        and extensive experience in Angular framework, I am proficient in building 
                                        scalable and robust applications. My expertise in unit testing ensures 
                                        the reliability and stability of software solutions. I am passionate 
                                        about continuously learning and adapting to new technologies and methodologies, 
                                        and thrive in collaborative environments. My objective is to utilize 
                                        my technical skills and experience to drive the success of software development 
                                        projects and contribute to the growth of the organization.
                                        </p>
                                      </div>
                                    </div>
                                </div>
                                  {/* Work Experience */}
                                  <div className="row">
                                    <div className="col mx-auto d-block">
                                      <div className="text-center">
                                        <div className="text-contact">
                                          Work Experience
                                          <br />
                                        </div>
                                      </div>
                                    </div>

                                    <div class="col-6 col-md-4 p-2">
                                      <div class="thumbnail">
                                       
                                        <div className="card-caption text-center">
                                          <div class="caption">
                                            <h2>E4 Carolinas</h2>
                                          </div>
                                          </div>
                                          <div>
                                            <p>
                                              <ul className="list-group list-group-flush text-color-dark">
                                                <li className="list-group-item">Built Architecture for 2 projects while designing the scope of the project.</li>
                                                <li className="list-group-item">Work with developers and database administrators to transform data models from logical to physical.</li>
                                                <li className="list-group-item">Effectively perform root cause analysis of issues and report the outcome to business community and Management.</li>
                                                <li className="list-group-item">Work with the Database Administration team to develop and enhance database standards.</li>
                                                <li className="list-group-item">Developed website using JavaScript to ease the performance.</li>
                                              </ul>
                                            </p>
                                          </div>
                                        </div>
                                    </div>
                                    <div class="col col-md-4 p-2">
                                      <div class="thumbnail">
                                        {/* Sheetalam */}
                                        <div className="card-caption text-center">
                                          <div class="caption">
                                            <h2>Sheetalam</h2>
                                          </div>
                                        </div>
                                        <div>
                                          <p>
                                            <ul className="list-group list-group-flush text-color-dark">
                                              <li className="list-group-item">Built an IOT based smart street light system to help the electricity problem in the area.</li>

                                              <li className="list-group-item">
                                              Developed the code using Arduino, Rasberry pi-3.
                                              </li>
                                              <li className="list-group-item">
                                                Ensure strategies, standards, and architectures are consistent and integrated across IT domains
                                              </li>
                                            <li className="list-group-item">
                                                Transform the logical details to actual physical code.
                                            </li>
                                            </ul>
                                          </p>
                                        </div>
                                        </div></div>
                                        {/* Diaspark pvt limited */}
                                        <div class="col col-md-4 p-2">
                                          <div class="thumbnail">
                                        <div className="card-caption text-center">
                                          <div class="caption">
                                            <h2>Diaspark Private Limited</h2>
                                          </div>
                                        </div>
                                        <div>
                                          <p>
                                            <ul className="list-group list-group-flush text-color-dark">
                                              <li className="list-group-item">Performed the front-end part for the web application using HTML, CSS and JavaScript, using Visual Studio for working with ASP .Net and C#. </li>
                                              <li className="list-group-item">Worked on Database creation, schema design and stored procedures in MS-SQL.</li>
                                              <li className="list-group-item">Implemented test cases for performing unit testing on the project.
                                              </li>
                                            </ul>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                {/*  */}
                                {/* Education */}
                                <div className="row p-5">
                                    <div className="col">
                                    <div className="text-center">
                                      <div className="text-contact">
                                        Education
                                        <br />
                                      </div>
                                  </div>
                                    </div>
                                                                
                                      <div class="col-sm-6 col-md-4 p-2">
                                        <div class="thumbnail">
                                          <img
                                            src="../../img/UNCC.jpg"
                                            className="img-fluid rounded mx-auto d-block col"
                                            alt="UNCC"
                                          />                                        
                                        <div className="card-caption text-center">
                                          <div class="caption">
                                            <h3>University of North Carolina at Charlotte</h3>
                                          </div>
                                        </div>
                                        <p className="text-color-dark">
                                          Master's of Science in Information Technology
                                        </p>
                                        </div>
                                      </div>
                                      
                                    <div class="col-sm-6 col-md-4 p-2 ">
                                      <div class="thumbnail">
                                        <img
                                          src="../../img/MPSTME.jpg"
                                          className="img-fluid rounded mx-auto d-block col-6"
                                          alt="MPSTME"
                                        />
                                        <div className="card-caption text-center">
                                        <div class="caption">
                                          <h3>NMIMS's Mukesh Patel School of Technology, Management and Engineering</h3>
                                        </div>
                                        </div>
                                        <p className="text-color-dark">
                                          Bachelors of Technology in Computer Science
                                        </p>
                                      </div>
                                    </div>
                                </div>
                                
                              </div>
                            </div>
                          </TextWrapper>
                        </React.Fragment>
                      );
                 }
               }

const TextWrapper = styled.nav`
  
  padding-left:0.3em;
  font-family: 'Gotu',sans-serif;
  background: var(--mainGray) !important;
  color:var(--mainWhite) !important;
  i {
  margin-right: 10px;
}
  .list-group-item{
    background:var(--mainGray) !important;
  }
  .font-size-content{
    font-size:1.5rem;
  }
  .card-caption{
    font-size: 1.5rem;
    background: transparent;
    font-weight:bold;
    color: var(--mainWhite);
  }
  .text-contact {
    color: var(--lightCyan);
    font-size: 3em;
     font-family: 'Gotu',
    sans-serif;
  }
  .text-title-name {
    font-size: 4em;
    background: var(--mainGray) !important;
    padding-left: 0.4em;
    color: var(--mainPink);
  }
  a {
    text-decoration: none;
    color: var(--lightCyan);
  }
  a:hover {
    color: var(--mainWhite);
  }
  .img-style{
    height:auto;
    width:200px;
    background: transparent;
    border: no-border;
  }
`;



const Ptile = styled.button`
         
         font-size: 1em;
         background: transparent;
         border: 0.05rem solid var(--lightBlue);
         border-color: var(--lightCyan);
         color: var(--lightCyan);
         border-radius: 0.5rem;
         padding: 0.2rem 0.5rem;
         cursor: pointer;
         margin: 0.2rem 0.5rem 0.2rem 0;
         transition: all 0.5s ease-in-out;
         
       `;
