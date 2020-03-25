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
                      {/* <span class="glyphicon glyphicon-chevron-right" /> */}
                    </ButtonContainer>
                  </Link>
                  <Link to="/aboutme">
                    <ButtonContainer>
                      Know More about me
                      {/* <span class="glyphicon glyphicon-chevron-right" /> */}
                    </ButtonContainer>
                  </Link>
                </div>
              </nav>
              {/* Heading */}
              <div className="row">
                <div className="col-10 mx-auto p-5 my-2 text-center text-title">
                  <h1 className="capitalize font-weight-bold text-title-name">
                    Projects
                  </h1>
                </div>
              </div>

              <div class="row">
                {/* Web Crawler Based HR Dashboard */}
                <div class="col-sm-6 col-md-4 p-2">
                  <div class="thumbnail">
                    <img
                      src="../../img/WebCrawler.jpg"
                      className="img-fluid rounded mx-auto d-block col"
                      alt="WebCrawler"
                    />
                    <Ptile>
                      <div class="caption">
                        <h3>Web Crawler Based HR Dashboard</h3>
                      </div>
                    </Ptile>
                    <p>
                      A Tableau based HR dashboard project using Python and
                      Tableau that helps the HR to analyze the market, this
                      project was done with CONTINENTAL AG as customer.
                      <br />
                      {"  "} {/* Github */}
                      <SocialIcon url="https://github.com/shairalnm/Web-Crawler-based-Dashboard" />
                      {"  "}
                      <SocialIcon url="https://public.tableau.com/profile/shairal.neema#!/vizhome/WebCrawlerBasedDashboard/Dashboard2?publish=yes" />
                    </p>
                  </div>
                </div>

                {/* Phone Store */}
                <div class="col-sm-6 col-md-4 p-2">
                  <div class="thumbnail">
                    <img
                      src="../../img/PhoneStore.jpg"
                      className="img-fluid rounded mx-auto d-block col"
                      alt="PhoneStore"
                    />
                    <Ptile>
                      <div class="caption">
                        <h3>Phone Store</h3>
                      </div>
                    </Ptile>
                    <p>
                      E-commerce website that helps you easily purchase phones
                      and use to Paypal to pay.
                      <br />
                      {"  "}
                      <SocialIcon url="https://github.com/shairalnm/E-commerce-website" />
                      {"  "}
                      <SocialIcon url="https://phone-store-website.netlify.com/" />
                    </p>
                  </div>
                </div>
                {/* Form Visualizer */}
                <div class="col-sm-6 col-md-4 p-2">
                  <div class="thumbnail">
                    <img
                      src="../../img/Visualization.jpg"
                      className="img-fluid rounded mx-auto d-block col "
                      alt="image"
                    />
                    <Ptile>
                      <div class="caption">
                        <h3>Form Visualizer</h3>
                      </div>
                    </Ptile>
                    <p>
                      An AWS based web application that uses a form and
                      visualizes it using MongoDB, Metabase, Angular, NodeJS, to
                      help the professor understand his students. <br />
                      {/* {"  "}
                      <SocialIcon url="" />
                      {"  "} */}
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div class="row">
                {/*Neonatal Intensive Care Unit (NICU) Follow Up */}
                <div class="col-sm-6 col-md-4 p-2">
                  <div class="thumbnail">
                    <img
                      src="../../img/NICU.jpg"
                      className="img-fluid rounded mx-auto d-block col "
                      alt="image"
                    />
                    <Ptile>
                      <div class="caption">
                        <h3>Neonatal Intensive Care Unit (NICU) Follow Up</h3>
                      </div>
                    </Ptile>
                    <p>
                      A portal that allows Neuro Developmental Assessment of a
                      newborn, followed by checkups till the age of 5 years.
                      {/* <br />
                      {"  "}
                      <SocialIcon url="" />
                      {"  "} */}
                    </p>
                  </div>
                </div>

                {/* Online Food Cart */}
                <div class="col-sm-6 col-md-4 p-2">
                  <div class="thumbnail">
                    <img
                      src="../../img/FoodCart.jpg"
                      className="img-fluid rounded mx-auto d-block col-6 "
                      alt="image"
                    />
                    <Ptile>
                      <div class="caption">
                        <h3>Online Food Cart</h3>
                      </div>
                    </Ptile>
                    <p>
                      A web application where in customers can order the food
                      items and pay online.
                      <br />
                      {/* {"  "}
                      <SocialIcon url="" />
                      {"  "} */}
                    </p>
                  </div>
                </div>
                {/* Lending Tree Data Analysis */}
                <div class="col-sm-6 col-md-4 p-2">
                  <div class="thumbnail">
                    <img
                      src="../../img/LendingTree.jpg"
                      className="img-fluid rounded mx-auto d-block"
                      alt="image"
                    />
                    <Ptile>
                      <div class="caption">
                        <h3>Lending Tree Data Analysis</h3>
                      </div>
                    </Ptile>
                    <p>
                      An Analysis based project to help LENDING TREE analyze
                      their data using D3 and Vega. <br />
                      {/* {"  "}
                      <SocialIcon url="" />
                      {"  "} */}
                    </p>
                  </div>
                </div>
              </div>
              {/* x */}
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
  font-weight: 50px;
  .text-contact {
    color: var(--lightCyan);
    font-size: 2em;
  }
  .text-title-name {
    font-size: 4em;
    padding-left: 0.4em;
    color: var(--mainPink) !important;
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