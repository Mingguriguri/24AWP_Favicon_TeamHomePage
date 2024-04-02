import React from "react";
import styled from 'styled-components';

const HeaderDiv = styled.div`
    background-color: #D9D9D9;
    font-size: 24px;
    color: #333;
    width: 100%;
    height: 7em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Header(){
    return (
        <HeaderDiv>
            Favicon
        </HeaderDiv>
    );
}

export default Header;