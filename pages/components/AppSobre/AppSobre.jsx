import React from "react";
import styled from "styled-components";
import {
  DiHtml5,
  DiJsBadge,
  DiSass,
  DiReact,
  DiCss3Full,
  DiGit,
} from "react-icons/di";

const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  ${flexCenter}
  flex-direction: column;
  background-color: #21211f;
  color: #fff;

  .conteiner {
    ${flexCenter}
    gap: 10px;
    flex-direction: column;
    max-width: 980px;
  }

  h2 {
    font-size: 30px;
    font-style: normal;
    font-family: sans-serif;
    margin-top: 5rem;
    padding: 0 20px;
  }

  p {
    font-family: sans-serif;
    font-size: 20px;
    padding: 0 20px;
  }

  .sobre-text {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 80%;
    margin: 2rem;
    min-height: 300px;
  }

  .sobre-image {
    display: grid;
    width: 90%;
    max-width: 980px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
    min-height: 300px;
  }

  .card-item {
    ${flexCenter}
    min-width: 100px;
  }

  .html-icon {
    font-size: 7rem;
  }

  @media (max-width: 768px) {
    .conteiner {
      display: flex;
      flex-direction: column;
      max-width: 80vw;
    }

    .sobre-image {
      width: 90vw;
    }
    .sobre-text {
      width: 90vw;
    }
  }
`;

function AppSobre() {
  return (
    <Wrapper className="sobre">
      <div className="conteiner">
        <div className="sobre-text">
          <h2>
            Olá,
            <br />
            sou Leandro Sales,
            <br />
            Desenvolvedor Front-end.
          </h2>
          <p>
            Sou do Rio de Janeiro, graduando em Ciência da Computação.
            <br />
            <br />
            Aficionado pela criação de elementos visuais agradáveis, busco
            aprimorar cada vez mais as técnicas de UI/UX em conjunto com as boas
            práticas de programação, para criar aplicações fluidas e de
            excelente aparência.
            <br />
            <br />
            Gosto de artes, de criar coisas novas e assistir séries com as
            pessoas que amo. <br />
            <br />
            Sou uma pessoa de família e gosto de estar perto e interagir com pessoas
            positivas.
          </p>
        </div>
        <div className="sobre-image">
          <div className="card-item">
            <DiHtml5 className="html-icon" />
          </div>
          <div className="card-item">
            <DiCss3Full className="html-icon" />
          </div>
          <div className="card-item">
            <DiJsBadge className="html-icon" />
          </div>
          <div className="card-item">
            <DiReact className="html-icon" />
          </div>
          <div className="card-item">
            <DiGit className="html-icon" />
          </div>
          <div className="card-item">
            <DiSass className="html-icon" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default AppSobre;
