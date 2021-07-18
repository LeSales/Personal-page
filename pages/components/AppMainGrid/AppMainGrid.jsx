import React from "react";
import { Wrapper, SubName } from "./AppMainGrid.styles";

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
