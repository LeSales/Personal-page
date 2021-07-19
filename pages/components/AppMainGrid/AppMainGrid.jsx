import React from "react";
import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100wh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 75px;
    font-weight: 900;
    font-style: normal;
    font-family: sans-serif;
    margin: 0;
  }
  
`;

export const SubName = styled.div`
display: flex;
flex-direction: row;
margin-top: -15px;
margin-left: 5px;
align-self: center;
align-items:center;
font-family: sans-serif;
font-weight:normal;

  .line{
        margin-left: 3px;
        height: 1px;
        width: 130px;
        background-color: #000;
    }
`;


function AppMainGrid() {
  return (
    <Wrapper>
      <div className="conteiner">
        <h1>Leandro Sales</h1>
        <SubName>
          Front-end developer<div className="line"></div>
        </SubName>
      </div>
    </Wrapper>
  );
}

export default AppMainGrid;
