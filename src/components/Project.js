import React, { Component } from 'react'
import {Ptile} from './ProjectTile';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { SocialIcon } from "react-social-icons";


export default class Project extends Component {
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
                  <Link to="/aboutme">
                    <ButtonContainer>
                      Know More about me                      
                    </ButtonContainer>
                  </Link>
                </div>
              </nav>
              {/* Heading */}
              <div className="row">
                <div className="col mx-auto p-5 my-2 text-center text-title">
                  <h1 className="capitalize font-weight-bold text-title-name">
                    Projects
                  </h1>
                </div>
              </div>



              <div class="container-fluid">
                <div class="row">
                  <div class="card-deck">
                    {/* Web Crawler Based HR Dashboard */}
                    <div class="card">
                      <img class="card-img-top p-1 rounded border border-secondary img-thumbnail mx-auto d-block " src="../../img/WebCrawler.jpg" alt="Card image cap"/>
                        <div class="card-block">
                        <Ptile>Web Crawler Based HR Dashboard</Ptile>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p class="card-text">
                            <small class="text-muted">
                            <br />
                            {"  "} {/* Github */}
                            <SocialIcon url="https://github.com/shairalnm/Web-Crawler-based-Dashboard" className=""/>
                            {"  "}
                            <SocialIcon url="https://public.tableau.com/profile/shairal.neema#!/vizhome/WebCrawlerBasedDashboard/Dashboard2?publish=yes" />
                            
                            </small>
                            </p>
                        </div>
                      </div>
                    {/* End of Web Crawler Based HR Dashboard  */}
                    {/* Phone Store */}
                      <div class="card">
                      <img class="card-img-top p-1 rounded border border-secondary img-thumbnail mx-auto d-block" src="../../img/PhoneStore.jpg" alt="Card image cap"/>
                          <div class="card-block">
                        <Ptile>Phone Store</Ptile>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted"><br />
                          {"  "}
                          <SocialIcon url="https://github.com/shairalnm/E-commerce-website" />
                          {"  "}
                          <SocialIcon url="https://phone-store-website.netlify.com/" /></small></p>
                          </div>
                        </div>
                    {/* End of Phone Store */}
                    {/* Form Visualizer */}
                        <div class="card">
                      <img class="card-img-top p-1 rounded border border-secondary img-thumbnail mx-auto d-block" src="../../img/Visualization.jpg" alt="Card image cap"/>
                            <div class="card-block">
                        <Ptile>Form Visualizer</Ptile>
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                              <p class="card-text">
                                <small class="text-muted">
                            <br />
                            {"  "}
                           {/*  <SocialIcon url="https://github.com/shairalnm/E-commerce-website" />
                            {"  "}
                            <SocialIcon url="https://phone-store-website.netlify.com/" /> */}
                                </small>
                                </p>
                            </div>
                          </div>
                    {/* End of Form Visualizer */}
                    
                        </div>
                      </div>
                      {/* End of 1st Row */}




                      {/* Start of 2nd Row */}
                <div class="row">
                  <div class="card-deck">
                    {/* Neonatal Intensive Care Unit (NICU) Follow Up */}
                    <div class="card">
                      <img class="card-img-top p-1 rounded border border-secondary img-thumbnail mx-auto d-block" src="../../img/NICU.jpg" alt="Card image cap" />
                      <div class="card-block">
                        <Ptile>Neonatal Intensive Care Unit (NICU) Follow Up</Ptile>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">
                          <small class="text-muted">
                            <br />
                            {"  "} {/* Github */}
                           {/*  <SocialIcon url="https://github.com/shairalnm/Web-Crawler-based-Dashboard" />
                            {"  "}
                            <SocialIcon url="https://public.tableau.com/profile/shairal.neema#!/vizhome/WebCrawlerBasedDashboard/Dashboard2?publish=yes" /> */}

                          </small>
                        </p>
                      </div>
                    </div>
                    {/* End of Web Crawler Based HR Dashboard  */}
                    {/* Online Food Cart */}
                    <div class="card">
                      <img class="card-img-top p-1 rounded border border-secondary img-thumbnail mx-auto d-block" src="../../img/FoodCart.jpg" alt="Card image cap" />
                      <div class="card-block">
                        <Ptile>Online Food Cart</Ptile>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        {/* <p class="card-text"><small class="text-muted"><br />
                          {"  "}
                          <SocialIcon url="https://github.com/shairalnm/E-commerce-website" />
                          {"  "}
                          <SocialIcon url="https://phone-store-website.netlify.com/" /></small></p> */}
                      </div>
                    </div>
                    {/* End of Online Food Cart */}
                    {/* Lending Tree Data Analysis */}
                    <div class="card">
                      <img class="card-img-top p-1 rounded border border-secondary img-thumbnail mx-auto d-block" src="../../img/LendingTree.jpg" alt="Card image cap" />
                      <div class="card-block">
                        <Ptile>Lending Tree Data Analysis</Ptile>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        {/* <p class="card-text">
                          <small class="text-muted">
                            <br />
                            {"  "}
                            <SocialIcon url="https://github.com/shairalnm/E-commerce-website" />
                            {"  "}
                            <SocialIcon url="https://phone-store-website.netlify.com/" />
                          </small>
                        </p> */}
                      </div>
                    </div>
                    {/* End of Lending Tree Data Analysis */}

                  </div>
                </div>
                {/* End of 2nd Row */}
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
  padding-left: 3em;
  background: var(--mainGray) !important;
  font-weight: 50px;
  .text-contact {
    color: var(--lightCyan);
    font-size: 2em;
  }
  .text-title-name {
    font-size: 4em;
    background: var(--mainGray) !important;
    padding-left: 0.4em;
    color: var(--mainPink);
  }
`;

const ImgContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-basis: calc(33.333% - 20px);
  margin: 10px;
  cursor: pointer;
  transition: 0.5s all ease-in;
`;