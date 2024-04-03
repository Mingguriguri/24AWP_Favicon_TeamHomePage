import React from "react";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import Member1 from "./memberInfo/Member1";
import Member2 from "./memberInfo/Member2";
import Member3 from "./memberInfo/Member3";
import Member4 from "./memberInfo/Member4";
import Member5 from "./memberInfo/Member5";
import Member6 from "./memberInfo/Member6";


const TeamMemberDiv = styled.div`
  padding-left: 40px;

  h1 {
    font-size: 40px;
    margin-bottom: 50px;
  }

  h4 {
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }
`;

const MemberImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const StyledLink = styled(Link)`
  width: calc(33.333% - 20px);
  text-decoration: none;
  color: inherit;

  img {
    width: 300px;
    height: auto;
  }

  p{
    padding-left: 80px;
  }
`;

function TeamMember() {
  return (
    <TeamMemberDiv>
      <Routes>
        <Route
          index
          element={
            <>
              <h1>Member Information</h1>
              <MemberImageContainer>
                <StyledLink to="/teamMember/Member1">
                  <img src="https://avatars.githubusercontent.com/u/117453101?s=64&v=4"alt="Member1"></img>
                  <p>201835457 박재민</p>
                </StyledLink>
                <StyledLink to="/teamMember/Member2">
                  <img src={require('./memberInfo/images/yoonsang.jpg')} alt="Member2"></img>
                  <p>201835532 조윤상</p>
                </StyledLink>
                <StyledLink to="/teamMember/Member3">
                  <img src="https://avatars.githubusercontent.com/u/101111603?s=70&v=4" alt="Member3"></img>
                  <p>201939734 김민정</p>
                </StyledLink>
                <StyledLink to="/teamMember/Member4">
                  <img src="https://avatars.githubusercontent.com/u/96830595?s=400&v=4" alt="Member4"></img>
                  <p>202031512 김민재</p>
                </StyledLink>
                <StyledLink to="/teamMember/Member5">
                  <img src="" alt="Member5"></img>
                  <p></p>
                </StyledLink>
                <StyledLink to="/teamMember/Member6">
                  <img src="" alt="Member6"></img>
                  <p></p>
                </StyledLink>
              </MemberImageContainer>
            </>
          }
        />

        <Route path="Member1" element={<Member1></Member1>}></Route>
        <Route path="Member2" element={<Member2></Member2>}></Route>
        <Route path="Member3" element={<Member3></Member3>}></Route>
        <Route path="Member4" element={<Member4></Member4>}></Route>
        <Route path="Member5" element={<Member5></Member5>}></Route>
        <Route path="Member6" element={<Member6></Member6>}></Route>
      </Routes>
    </TeamMemberDiv>
  );
}

export default TeamMember;
