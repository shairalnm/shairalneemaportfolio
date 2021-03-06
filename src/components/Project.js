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

                    {/* Karigari */}
                    <div class="card">
                      <img class="card-img-top p-1 rounded border border-secondary img-thumbnail img-fluid mx-auto d-block " src="../../img/Karigari.jpg" alt="Card image cap" />
                      <div class="card-block">
                        <div className="card-caption">
                          Karigari
                        </div>
                        <p class="card-text">A Jewelry selling Mobile based application designed to ease the purchasing. </p>
                        <p class="card-text">
                          <small class="text-muted">
                            <br />
                            {"  "} {/* Github */}
                            {/* <SocialIcon url="" className="" /> */}
                            {"  "}
                            <SocialIcon url="https://play.google.com/store/apps/details?id=com.geniusv.karigari&hl=en_US" />

                          </small>
                        </p>
                      </div>
                    </div>
                    {/* End of Karigari  */}


                    {/* Web Crawler Based HR Dashboard */}
                    <div class="card">
                      <img class="card-img-top p-1 rounded border border-secondary img-thumbnail img-fluid mx-auto d-block " src="../../img/WebCrawler.jpg" alt="Card image cap"/>
                        <div class="card-block">
                        <div className="card-caption">
                          Web Crawler Based HR Dashboard
                        </div>
                          <p class="card-text">A dashboard to help the HR executives easily locate job seeking candidates and view the insights of job market.</p>
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
                      <img class="card-img-top p-1 rounded border border-secondary img-thumbnail img-fluid mx-auto d-block" src="../../img/PhoneStore.jpg" alt="Card image cap"/>
                          <div class="card-block">
                        <div className="card-caption">Phone Store</div>
                            <p class="card-text">An Ecommerce website for purchasing of used phones at cheaper price.</p>
                        <p class="card-text"><small class="text-muted"><br />
                          {"  "}
                          <SocialIcon url="https://github.com/shairalnm/E-commerce-website" />
                          {"  "}
                          <SocialIcon url="https://phone-store-website.netlify.com/" /></small></p>
                          </div>
                        </div>
                    {/* End of Phone Store */}
                    
                        </div>
                      </div>
                      {/* End of 1st Row */}




                      {/* Start of 2nd Row */}
                <div class="row">
                  <div class="card-deck">

                    {/* Online Pharmacy Management System */}
                    <div class="card">
                      <img class="card-img-top p-1 rounded border border-secondary img-thumbnail img-fluid mx-auto d-block " src="../../img/Pharmacy.jpg" alt="Card image cap" />
                      <div class="card-block">
                        <div className="card-caption">
                          Online Pharmacy Management System
                        </div>
                        <p class="card-text">A web based application deisgned in java for the purchasing of Medicines without the hassle of stepping out when you are sick. </p>
                        <p class="card-text">
                          <small class="text-muted">
                            <br />
                            {"  "} {/* Github */}
                            {/* <SocialIcon url="" className="" /> */}
                            {"  "}
                            <SocialIcon url="https://github.com/shairalnm/Online-Pharmacy-Management" />

                          </small>
                        </p>
                      </div>
                    </div>
                    {/* End of Online Pharmacy Management System  */}
                    {/* Form Visualizer */}
                    <div class="card">
                      <img class="card-img-top p-1 rounded border border-secondary img-thumbnail img-fluid mx-auto d-block" src="../../img/Visualization.jpg" alt="Card image cap" />
                      <div class="card-block card-title">
                        <div className="card-caption">Form Visualizer</div>
                        <p class="card-text">An AWS based web application that uses a form and visualizes it using MongoDB, Metabase, Angular, NodeJS, to help the professor understand his students.</p>
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

                   
                    {/* Lending Tree Data Analysis */}
                    <div class="card">
                      <img class="card-img-top p-1 rounded border border-secondary img-thumbnail img-fluid mx-auto d-block" src="../../img/LendingTree.jpg" alt="Card image cap" />
                      <div class="card-block">
                        <div className="card-caption">Lending Tree Data Analysis</div>
                        <p class="card-text">An Analysis based project to help LENDING TREE analyze their data using D3 and Vega.  </p>
                        <p class="card-text">
                          <small class="text-muted">
                            <br />
                            {"  "}
                            <SocialIcon url="https://github.com/shairalnm/FinalProjectVA" />
                            {/* {"  "}
                            <SocialIcon url="https://phone-store-website.netlify.com/" /> */}
                          </small>
                        </p>
                      </div>
                    </div>
                    {/* End of Lending Tree Data Analysis */}

                  </div>
                </div>
                {/* End of 2nd Row */}

                {/* Start of 3rd row */}               
                <div class="row">
                  <div class="card-deck">
                    {/* Neonatal Intensive Care Unit (NICU) Follow Up */}
                    <div class="card">
                      <img class="card-img-top p-1 rounded border border-secondary img-thumbnail img-fluid mx-auto d-block" src="../../img/NICU.jpg" alt="Card image cap" />
                      <div class="card-block">
                        <div className="card-caption">Neonatal Intensive Care Unit (NICU) Follow Up</div>
                        <p class="card-text">
                          A portal that allows Neuro Developmental Assessment of a newborn, followed by checkups till the age of 5 years.</p>
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
                    {/* End of Neonatal Intensive Care Unit (NICU) Follow Up  */}
                    {/* Online Food Cart */}
                    <div class="card">
                      <img class="card-img-top p-1 rounded border border-secondary img-thumbnail img-fluid mx-auto d-block" src="../../img/FoodCart.jpg" alt="Card image cap" />
                      <div class="card-block">
                        <div className="card-caption">Online Food Cart</div>
                        <p class="card-text">A web application where in customers can order the food items and pay online.</p>
                        {/* <p class="card-text"><small class="text-muted"><br />
                          {"  "}
                          <SocialIcon url="https://github.com/shairalnm/E-commerce-website" />
                          {"  "}
                          <SocialIcon url="https://phone-store-website.netlify.com/" /></small></p> */}
                      </div>
                    </div>
                    {/* End of Online Food Cart */}
                    
                  </div>
                </div>
                {/* End of 3rd Row */}






                    </div>            
            </div>
          </div>
        </TextWrapper>
      </React.Fragment>
    );
  }
}
const TextWrapper = styled.nav`
  font-family: 'Gotu',sans-serif;
  padding-left: 3em;
  background: var(--mainGray) !important;
  color:var(--mainWhite) !important;
  .card-caption{
    font-size: 1.5rem;
    background: transparent;
    font-weight:bold;
    background: var(--mainGray) !important;
  }
  .img-thumbnail{
    height:200px;
    width:300px;

  }
  .text-contact {
    color: var(--lightCyan);
    font-size: 2em;
  }
  .card{
    background: var(--mainGray) !important;
  }
  .text-title-name {
    font-size: 4em;
    background: var(--mainGray) !important;
    padding-left: 0.4em;
    color: var(--mainPink);
  }
`;

