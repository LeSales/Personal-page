import React from "react";
import { Wrapper } from "./AppHeader.styles";

function AppHeader() {
  return (
      <Wrapper>
        <div>
          <h2>Bem vindo</h2>
          <nav>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Sobre</a>
              </li>
              <li>
                <a>Portfólio</a>
              </li>
              <li>
                <a>Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
  );
}

export default AppHeader;
