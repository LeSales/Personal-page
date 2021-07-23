import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';

const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 99vw;
  min-height: 100vh;
  ${flexCenter}
  flex-direction: column;
  background-color: #fff;
  padding: 100px;
  font-size: 24px;
  font-family: sans-serif;
  color:#5e5e5e;

  h2 {
    font-size: 30px;
    font-style: normal;
    font-family: sans-serif;
    margin: 0;
  }

  .conteiner {
    ${flexCenter}
    max-width: 980px;
    margin: 50px 0;
    display: flex;
    padding: 16px;
  }

  .conteiner h2 {
    height: 15%;
    padding: 15px;
  }

  .conteiner p {
    height: 55%;
    padding-left: 20px;
  }

  .imagem {
    ${flexCenter}
    width: 50vw;
    height: 40vh;
    border-radius: 10px;
    border: 1px solid #21211f;
    margin: 0 50px;
  }

  .infos {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    color:#21211f;
    width: 50vw;
    height: 40vh;
    margin: 0 50px;
  }

  .separator {
    width: 100%;
    max-width: 980px;
    height: 2px;
    background-color: #CCC;
  }
  .buttons{
    display: flex;
    width: 80%;
    height: 15%;
    justify-content: space-evenly;
  }

  .preview{
    min-width: 80px;
    width: 35%;
    background-color: #21211f;
    border-radius: 30px;
    color: #FFF;
  }

  .preview:hover{
    background-color: #3f3e3e;
  }

  .visit{
    min-width: 80px;
    width: 35%;
    background-color: #FFF;
    border-radius: 30px;
    color: #21211f;
    border: 1px solid #21211f;
  }

  .visit:hover{
    background-color: #21211f;
    color:#FFF;
  }
`;

function AppPortfolio() {
  return (
  <Wrapper className="portfolio">
    Portfólio
    <PortfolioSection title={"Teste Title"} description={"test Description"}></PortfolioSection>
    <div className="separator"></div>
    <PortfolioSection></PortfolioSection>
    <div className="separator"></div>
    <PortfolioSection></PortfolioSection>
  </Wrapper>);
}

function PortfolioSection(props) {
  return (
    <>
      <div className="conteiner">
        <div className="imagem">
          Imagem
        </div>
        <div className="infos">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className="buttons">
          <Button variant="contained" className="preview">Preview</Button>
          <Button variant="contained" className="visit">Visit</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppPortfolio;
