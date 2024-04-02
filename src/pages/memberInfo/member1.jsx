import React from "react";
import styled from "styled-components";
import homepage from "./images/mainpage.png";

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

function Member1() {
  return (
    <MemberDiv>
      <ImagesDiv>
        <img
          src="https://avatars.githubusercontent.com/u/117453101?s=64&v=4"
          style={{ width: "400px", height: "400px", paddingRight: "100px" }}
        ></img>
        <img src={homepage} style={{ width: "55vw", height: "400px" }}></img>
      </ImagesDiv>
      <IntroductionDiv>
        <p>Name: 박재민</p>
        <p>Age: 27</p>
        <p>Address: 경기도 성남시 중원구 성남동 4356</p>
        <p>What I want to say: 프로젝트에 열심히 참여하겠습니다.</p>
      </IntroductionDiv>
    </MemberDiv>
  );
}

export default Member1;
