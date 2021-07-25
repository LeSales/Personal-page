import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 99vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;

  background: url("https://raw.githubusercontent.com/LeSales/Personal-page/df09055c11b851ae8012b455b7695718d8c1b1ec/assets/img/bgwave.svg")
    no-repeat;
  background-position: center start;
  background-size: cover;
  overflow: hidden;
  background-blend-mode: overlay;

  


  .nome {
    font-size: 7.5rem;
    font-weight: 900;
    font-style: normal;
    font-family: sans-serif;
    margin: 0;
  }
  @media (max-width: 475px) {
    .nome {
      font-size: 4.5rem;
    }
  }
`;

export const SubName = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -15px;
  margin-left: 5px;
  align-self: center;
  align-items: center;
  font-family: sans-serif;
  font-weight: normal;

  .line {
    margin-left: 3px;
    height: 1px;
    width: 130px;
    background-color: #000;
  }

  @media (max-width: 475px) {
    margin-top: -10px;
    margin-left: 2px;
    .nome {
      font-size: 5rem;
    }
  }
`;

function AppMainGrid() {
  return (
    <Wrapper className="home">
      <div className="conteiner">
        <h1 className="nome">Leandro Sales</h1>
        <SubName>
          Front-end developer<div className="line"></div>
        </SubName>
      </div>
    </Wrapper>
  );
}

export default AppMainGrid;
