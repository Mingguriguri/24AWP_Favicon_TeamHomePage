import React from "react";
import styled from 'styled-components';

const AboutDiv = styled.div`
    padding-left: 40px;

    h1 {
    font-size: 40px;
    margin-bottom: 50px;
  }
`;

function About() {

    return (
        <AboutDiv>
            <h1>ABOUT</h1>
        </AboutDiv>
    );
}

export default About;