import React from "react";
import styled from "styled-components";

const AboutDiv = styled.div`
  padding-left: 40px;

  display: flex;

  h1 {
    font-size: 40px;
    margin-bottom: 50px;
  }
`;

const ABOUTContentDiv = styled.div`
  width: 50%;
  height: auto;
  margin-right: 50px;
`;

function About() {
  return (
    <AboutDiv>
      <ABOUTContentDiv>
        <h1>ABOUT</h1>
        <p>
          This project is the highlight of Gachon University's advanced web
          programming course and a creative team homepage production project
          created by passionate team members.
        </p>
        <p>
          Our team consists of six members with various background and
          expertise, and expertise and expertise to cooperate for the success of
          projects.
        </p>
        <br />
        <p>
          To provide an innovative user experience, we plan to build a rich and
          dynamic web environment by utilizing various libraries, including the
          latest front-end technology, React.
        </p>
        <p>
          In addition, for strong backend support, we will adopt a spring boot
          framework to develop a reliable and scalable server-side application.
        </p>
        <br />
        <p>
          All of this is a result of making our cooperation and technical
          passion, and technical passion, we want to explore infinite
          possibilities through this project.
        </p>
      </ABOUTContentDiv>
      <div>
        <img
          style={{ width: "40vw", height: "65vh", marginTop: "30px" }}
          src="https://play-lh.googleusercontent.com/4Te16f3LUmImWpe5_M_iRBrEr0nxMdLVq61sZAvP46SlgKKZMQdjEIJFzuZH9Bh29r9A"
        ></img>
      </div>
    </AboutDiv>
  );
}

export default About;
