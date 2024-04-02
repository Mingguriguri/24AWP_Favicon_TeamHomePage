import React from "react";
import styled from "styled-components";

const IntroductionDiv = styled.div`
  padding-left: 40px;

  h1 {
    font-size: 40px;
    margin-bottom: 50px;
  }
`;

function Introduction() {
  return (
    <IntroductionDiv>
      <h1>Introduction</h1>
      <p>
        Our team is a group of members with various perspectives and
        experiences, consisting of three passionate fourth graders and three<br/>
        creative third graders from Gachon University. We had an in-depth
        brainstorming session to set the direction of the project, and in the<br/>
        process, we selected interesting topics based on our ideas and passion.<br/><br/>
      </p>
      <p>
        This colorful combination distributes roles evenly so that each member
        can demonstrate their abilities in front-end and back-end development<br/>
        areas, and through this, we want to realize a true teamwork in which the
        entire team works together toward one goal. Our main goal is to combine<br/>
        our technical capabilities and creativity to produce optimal outcomes,
        and in this process, we will learn, grow, and feel a sense of<br/>
        accomplishment together.<br/><br/>
      </p>
      <p>
        This project will go beyond the simple challenge of expanding our
        technical capabilities, realizing the importance of collaboration, and,<br/>
        most importantly, bringing our creative ideas into reality. Through this
        journey, we will unleash our capabilities to the fullest and deliver<br/>
        outstanding project outcomes that exceed expectations.<br/><br/>
      </p>
    </IntroductionDiv>
  );
}

export default Introduction;
