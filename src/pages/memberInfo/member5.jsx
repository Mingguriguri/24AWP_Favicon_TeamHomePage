import React from "react";
import styled from "styled-components";

const MemberDiv = styled.div`
  margin-top: 40px;

  p {
    font-size: 14px;
    font-weight: 600;
  }
`;

const ImagesDiv = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const IntroductionDiv = styled.div`
  p {
    font-size: 20px;
  }
`;

function Member5() {
  return (
    <MemberDiv>
      <ImagesDiv>
        <img
          src=""
          style={{ width: "400px", height: "400px", paddingRight: "100px" }}
        ></img>
        <img
          src=""
          alt="image"
          style={{ width: "55vw", height: "400px" }}
        ></img>
      </ImagesDiv>
      <IntroductionDiv>
        <p>Name: </p>
        <p>Age: </p>
        <p>Address: </p>
        <p>What I want to say: </p>
      </IntroductionDiv>
    </MemberDiv>
  );
}

export default Member5;
