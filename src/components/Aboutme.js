import React, { Component } from 'react'
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";


/* const styles = { height: 400, width: "100%" };
const icon_right = <span className="glyphicon glyphicon-chevron-right" />;
const icon_left = <span className="glyphicon glyphicon-chevron-left" />; */


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
                                        {/* <span class="glyphicon glyphicon-chevron-right" /> */}
                                      </ButtonContainer>
                                    </Link>
                                    <Link to="/project">
                                      <ButtonContainer>
                                        View my work
                                        {/* <span class="glyphicon glyphicon-chevron-right" /> */}
                                      </ButtonContainer>
                                    </Link>
                                  </div>
                                </nav>

                                {/* Heading */}
                                <div className="row">
                                  <div className="col-10 mx-auto my-2 text-center text-title">
                                    <h1 className="capitalize font-weight-bold text-title-name">
                                      About me
                                    </h1>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-3">
                                    <img
                                      src="../../img/shairal.jpg"
                                      className="img-fluid rounded mx-auto d-block "
                                      alt="Shairal Neema"
                                    />
                                  </div>
                                  <div className="col ">
                                    <p>
                                      <div className="text-center">
                                        <div className="text-contact">
                                          <em>Shairal Neema</em>
                                          <br />
                                        </div>
                                        +1(704)-236-4308
                                        <br />
                                        shairalnm@gmail.com
                                      </div>                                      
                                      </p>
                                      <div className="col pl-10 mt-2 ml-10 justified">
                                        {/* sOCIAL NETWORK ICONS */}
                                        <div className="p-5">
                                          {/* Linkedin */}
                                          <SocialIcon url="https://www.linkedin.com/in/shairal-neema-932227b2/" />
                                          {"  "} {/* Github */}
                                          <SocialIcon url="https://github.com/shairalnm" />
                                          {/* Mail */}
                                          {/* <SocialIcon
                                          url="shairalneema.com"
                                          label="Our portfolio"
                                        /> */}
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
                                      {/* <div className="p-4 text-center">
                                        Master's of Science in Information
                                        Technology
                                      </div> */}
                                    <div className="row">
                                      <div className="col p-6 mt-5">
                                      <div className="text-justified text-center">
                                        <p>
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
                                    <div className="col-3">
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
                                          <Ptile>
                                          <div class="caption">
                                            <h3>University of North Carolina at Charlotte</h3>
                                          </div>
                                        </Ptile>
                                        <p>
                                          Master's of Science in Information Technology
                                        </p>
                                        </div>
                                      </div>
                                    <div class="col-sm-6 col-md-4 p-2">
                                      <div class="thumbnail">
                                        <img
                                          src="../../img/MPSTME.jpg"
                                          className="img-fluid rounded mx-auto d-block col-6"
                                          alt="MPSTME"
                                        />
                                        <Ptile>
                                        <div class="caption">
                                          <h3>NMIMS's Mukesh Patel School of Technology, Management and Engineering</h3>
                                        </div>
                                        </Ptile>
                                        <p>
                                          Bachelors of Technology in Computer Science
                                        </p>
                                      </div>
                                    </div>
                                </div>
                                  {/* Work Experience */}
                                  <div className="row p-5">
                                    <div className="col-3">
                                      <div className="text-center">
                                        <div className="text-contact">
                                          <em>Work Experience</em>
                                          <br />
                                        </div>
                                      </div>
                                    </div>

                                    <div class="col-sm-6 col-md-4 p-2">
                                      <div class="thumbnail">
                                       
                                        <Ptile>
                                          <div class="caption">
                                            <h3>E4 Carolinas</h3>
                                          </div>
                                        </Ptile>
                                        <p>
                                          
                                        </p>
                                      </div>
                                    </div>
                                    <div class="col-sm-6 col-md-4 p-2">
                                      <div class="thumbnail">
                                        
                                        <Ptile>
                                          <div class="caption">
                                            <h3>Diaspark Private Limited</h3>
                                          </div>
                                        </Ptile>
                                      
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
  font-family: "Permanent Marker", cursive;
  padding-left: 1.3em;
  font-size: 1.5em;
  .text-contact {
    color: var(--lightCyan);
    font-size: 2em;
  }
  .text-title-name {
    font-size: 3em;
    padding-left: 0.4em;
    color: var(--mainPink) !important;
  }
  a {
    text-decoration: none;
    color: var(--lightCyan);
  }
  a:hover {
    color: var(--mainWhite);
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
