import React from "react";
import styled from 'styled-components';

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
            <h1>팀 소개말</h1>

        </IntroductionDiv>
    );
}

export default Introduction;