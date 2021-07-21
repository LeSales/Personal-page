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
  background-color: #FFF;

  h2 {
    font-size: 30px;
    font-style: normal;
    font-family: sans-serif;
    margin: 0;
  }
  
`;

function AppPortfolio() {
  return (
    <Wrapper className="portfolio">
      <div className="conteiner">
        <h2>To do: Portfólio</h2>
      </div>
    </Wrapper>
  );
}

export default AppPortfolio;
