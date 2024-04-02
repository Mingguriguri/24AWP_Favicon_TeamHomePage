import React from "react";
import styled from 'styled-components';

const HeaderDiv = styled.div`
    position: relative;
    width: 100%;
    height: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BackgroundDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #C8E0FE;
    /* background-image: url('https://i.namu.wiki/i/qa2NhgamPYvRzexMRusF86uh3yyfBWT3TCoMCsmMk2JMkjI17RneFDTN9nSEL-gfbJebSINBj0zsoMNZAKmbcg.webp');
    background-size: cover; */
    background-position: center;
    filter: blur(2px);
    z-index: -1;
`;

const TextDiv = styled.div`
    font-size: 24px;
    color: #333;
    z-index: 1;
`;

function Header() {
    return (
        <HeaderDiv>
            <BackgroundDiv></BackgroundDiv>
            <TextDiv><h1>Favicon</h1></TextDiv>
        </HeaderDiv>
    );
}

export default Header;
