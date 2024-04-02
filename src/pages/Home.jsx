import React from "react";
import styled from "styled-components";

const HomeDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

const LeftDiv = styled.div`
  padding-left: 40px;
  width: 50%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  h1{
    font-size: 40px;
  }

  h4{
    font-size: 20px;
  }

  p{
    font-size: 15px;
  }
`;

const RightDiv = styled.div`
  padding-left: 30px;
  width: 50%;
`;

function Home() {
  return (
    <HomeDiv>
      <LeftDiv>
        <h1>Team Project</h1>
        <h4>Subtitle</h4>
        <p>content</p>
      </LeftDiv>
      <RightDiv>
        <img style={{height: "68vh", width: "45vw"}} src="https://image.fmkorea.com/files/attach/new3/20231014/486616/4207925626/6281744589/2b931992167e2da6cb54b366b1581d17.jpg"></img>
      </RightDiv>
    </HomeDiv>
  );
}

export default Home;
