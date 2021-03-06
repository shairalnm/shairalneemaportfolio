import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from './Button';

export default class Introduction extends Component {
  render() {
    return (
      <IntroWrapper>
        {/* <!-- HOME --> */}
        <div className="container">
          <div className="row">
            <h1 className="text-title ">
              Hello, I'm
              <span className=" text-title-name">Shairal Neema</span>
            </h1>
            </div><div className="row">
            <div className="text-center">
              <h3>I'm a full-stack web developer</h3>
            </div>
          </div>
          {/* Button view my work */}
          <br />
          <div className="row">
          <div className="btn">
            <Link to="/project">
              <ButtonContainer>
                View my work
                
              </ButtonContainer>
            </Link>
          </div>
        </div>
          {/* Know more about me */}
          
          <div className="row">
          <div className="btn">
            <Link to="/aboutme">
              <ButtonContainer>
                Know more about me
                
              </ButtonContainer>
            </Link>
          </div>
          </div>
        </div>
      </IntroWrapper>
    );
  }
}

const IntroWrapper = styled.nav`
  background: var(--mainGray);
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform: capitalize;
  text-align: center;
  padding: 4em;
  margin: 5em;
  .text-title-name {
    font-size: 2em;
    padding-left: 0.4em;
    color: var(--mainPink) !important;
  }
`;