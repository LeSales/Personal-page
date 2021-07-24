import React from "react";
import styled from "styled-components"

export const Wrapper = styled.header`
    height: 70px;
    width: 99vw;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color : #FFF;
    color: #21211F;


    div{
        max-width: 980px;
        font-size: 1.6rem;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

function AppFooter() {
  return (
      <Wrapper>
       <div>Criado por Leandro Sales</div>
      </Wrapper>
  );
}

export default AppFooter;
