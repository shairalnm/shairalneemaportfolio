import React, { Component } from 'react'
import styled from "styled-components";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
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
                                      <div className="p-10 mb-0 text-center">
                                        <div className="text-contact">
                                          <em>Shairal Neema</em>
                                          <br />
                                        </div>
                                        +1(704)-236-4308
                                        <br />
                                        shairalnm@gmail.com
                                      </div>
                                      <div className="p-4 text-center">
                                        Master's of Science in Information
                                        Technology
                                      </div>
                                      <div className="text-justified">
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
                                      <ButtonContainer>
                                        <i class="fa fa-download" />{" "}
                                        <a
                                          download
                                          href="./Assets/ShairalNeemaResume.pdf"
                                        >
                                          Download Resume
                                        </a>
                                      </ButtonContainer>
                                    </p>
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