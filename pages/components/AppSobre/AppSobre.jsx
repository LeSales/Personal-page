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

import {
  SiFlutter
} from "react-icons/si";

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
    padding: 5rem;
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
    font-size: 2rem;
    padding: 0 20px;
  }
  .subtitle{
    font-family: sans-serif;
    font-size: 1.6rem;
    padding: 0;
    padding-left:20px;
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
    max-width: 980px;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 1rem;
    min-height: 100px;
    padding: 5rem 0;
  }

  .card-item {
    ${flexCenter}
    justify-self: center;
    margin-bottom: 3rem;
    width: 11rem;
    height: 11rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
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
      grid-gap: 0;
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
            Desenvolvedor Front-end e Mobile.
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
            Sou uma pessoa de família e gosto de estar perto e interagir com
            pessoas positivas.
          </p>
          <h3 style={{paddingLeft:20, paddingTop:"3rem", fontSize:"2.5rem"}}>Experiências</h3>
          <p>Desenvolvedor Front-end e Mobile - Autônomo</p>
          <p className="subtitle">Desenvolvimento Front-end com as seguintes tecnologias:</p>
          <ul>
            <li>React (Hooks e styled-components)</li>
            <li>React Native</li>
            <li>Dart</li>
            <li>Flutter</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3 (SASS)</li>
            <li>Git</li>
          </ul>
          <p className="subtitle">Criação de Layouts com as ferramentas:</p>
          <ul>
            <li>Adobe XD</li>
            <li>Figma</li>
          </ul>

          <p>Desenvolvedor mobile - CrossSystem Tecnologia da Informação (Estágio)</p>
          <p className="subtitle">01/20 - 10/20</p>
          <p className="subtitle">Desenvolvimento de aplicativos utilizando React Native com expo</p>
          <ul>
            <li>Criação de novas funcionalidades</li>
            <li>Manutenção e atualização de funcionalidades já implementadas</li>
            <li>Criação de layouts mobile e web através das ferramentas Adobe XD e Figma</li>
          </ul>
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
          <div className="card-item">
            <SiFlutter className="html-icon" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default AppSobre;
