import React from "react";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import Member1 from "./memberInfo/member1";
import Member2 from "./memberInfo/member2";
import Member3 from "./memberInfo/member3";
import Member4 from "./memberInfo/member4";
import Member5 from "./memberInfo/member5";
import Member6 from "./memberInfo/member6";

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
                <StyledLink to="/teamMember/member1">
                  <img
                    src="https://avatars.githubusercontent.com/u/117453101?s=64&v=4"
                    alt="member1"
                  ></img>
                  <p>201835457 박재민</p>
                </StyledLink>
                <StyledLink to="/teamMember/member2">
                  <img src="https://avatars.githubusercontent.com/u/115504766?s=70&v=4" alt="member2"></img>
                  <p>201835532 조윤상</p>
                </StyledLink>
                <StyledLink to="/teamMember/member3">
                  <img src="https://avatars.githubusercontent.com/u/101111603?s=70&v=4" alt="member3"></img>
                  <p>201939634 김민정</p>
                </StyledLink>
                <StyledLink to="/teamMember/member4">
                  <img src="" alt="member4"></img>
                  <p></p>
                </StyledLink>
                <StyledLink to="/teamMember/member5">
                  <img src="" alt="member5"></img>
                  <p></p>
                </StyledLink>
                <StyledLink to="/teamMember/member6">
                  <img src="" alt="member6"></img>
                  <p></p>
                </StyledLink>
              </MemberImageContainer>
            </>
          }
        />

        <Route path="member1" element={<Member1></Member1>}></Route>
        <Route path="member2" element={<Member2></Member2>}></Route>
        <Route path="member3" element={<Member3></Member3>}></Route>
        <Route path="member4" element={<Member4></Member4>}></Route>
        <Route path="member5" element={<Member5></Member5>}></Route>
        <Route path="member6" element={<Member6></Member6>}></Route>
      </Routes>
    </TeamMemberDiv>
  );
}

export default TeamMember;