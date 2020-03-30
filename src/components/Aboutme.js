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
                                          className=" img-style rounded mx-auto d-block "
                                      alt="Shairal Neema"
                                        />
                                   
                                  </div> 
                                    
                                  <div className="col ">
                                    <p>
                                      <div className="text-centre">
                                        <div className="text-contact">
                                          <em>Shairal Neema</em>
                                          <br />
                                        </div>
                                          <p className="font-size-content">
                                        +1(704)-236-4308
                                        <br />
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
                                          Accomplished graduate student with 1.5
                                          years of industry software development
                                          and engineering experience with
                                          proficiency in .Net, Java and database
                                          creation. Designed Web-based ASP.NET
                                          Internet applications connected to SQL
                                          databases. Enthusiastic to work
                                          cohesively in diversified groups,
                                          aiming a voluminous team output.
                                        </p>
                                      </div>
                                    </div>
                                </div>
                                {/* Education */}
                                  <div className="row p-5">
                                    <div className="col">
                                    <div className="text-center">
                                      <div className="text-contact">
                                        <em>Education</em>
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
                                  {/* Work Experience */}
                                  <div className="row">
                                    <div className="col mx-auto d-block">
                                      <div className="text-center">
                                        <div className="text-contact">
                                          <em>Work Experience</em>
                                          <br />
                                        </div>
                                      </div>
                                    </div>

                                    <div class="col-sm-6 col-md-4 p-2">
                                      <div class="thumbnail">
                                       
                                        <div className="card-caption text-center">
                                          <div class="caption">
                                            <h3>E4 Carolinas</h3>
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
                                        
                                        <p>
                                          
                                        </p>
                                      </div>
                                    </div>
                                    <div class="col-sm-6 col-md-4 p-2">
                                      <div class="thumbnail">
                                        
                                        <div className="card-caption text-center">
                                          <div class="caption">
                                            <h3>Diaspark Private Limited</h3>
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
                              </div>
                            </div>
                          </TextWrapper>
                        </React.Fragment>
                      );
                 }
               }

const TextWrapper = styled.nav`
  font-family: 'Shadows Into Light',cursive;
  padding-left: 3em;
  
  background: var(--mainGray) !important;
  color:var(--mainWhite) !important;
  .text-color-dark{
    color: var(--mainDark);
    font-family: 'Gotu',sans-serif;
  }
  .font-size-content{
    font-size:1.5rem;
  }
  .card-caption{
    font-size: 1.5rem;
    background: transparent;
    font-weight:bold;
    color: var(--mainDark);
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
    height:350px;
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
