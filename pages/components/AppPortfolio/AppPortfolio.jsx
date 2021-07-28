import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  ${flexCenter}
  flex-direction: column;
  background-color: #fff;
  font-size: 2.4rem;
  font-family: sans-serif;
  color: #5e5e5e;

  h2 {
    font-size: 2.5rem;
    font-style: normal;
    font-family: sans-serif;
    margin: 0;
  }

  p {
    font-size: 2rem;
  }

  .conteiner {
    ${flexCenter}
    max-width: 980px;
    margin: 5rem 0;
    display: flex;
  }

  .conteiner p {
    text-align: center;
  }

  .imagem {
    ${flexCenter}
    justify-content: space-between;
    //max-width: 430px;
    width: 50vw;
    border-radius: 10px;
    border: 1px solid #21211f;
    //margin: 0 5rem;
  }

  .infos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    color: #21211f;
    width: 25vw;
    height: 40vh;
    padding: 0 5rem;
  }

  .separator {
    width: 100%;
    max-width: 980px;
    height: 2px;
    background-color: #e0e0e0;
  }
  .buttons {
    display: flex;
    width: 100%;
    height: 15%;
    justify-content: space-evenly;
  }

  .btn {
    max-width: 5rem;
  }

  .preview {
    font-size: 1.2rem;
    min-width: 12rem;
    background-color: #21211f;
    border-radius: 30px;
    color: #fff;
  }

  .preview:hover {
    background-color: #3f3e3e;
  }

  .visit {
    font-size: 1.2rem;
    min-width: 12rem;
    background-color: #fff;
    border-radius: 30px;
    color: #21211f;
    border: 1px solid #21211f;
  }

  .visit:hover {
    background-color: #21211f;
    color: #fff;
  }

  .links {
    ${flexCenter}
    text-decoration: none;
    height: 3.5rem;
  }

  .links:visited {
    color: inherit;
  }

  .imagem img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    .conteiner {
      flex-direction: column;
    }
    .infos {
      min-width: 90vw;
      padding: 0;
    }
    .imagem {
      min-width: 90vw;
      margin: 0;
      padding: 0;
    }
  }
`;

function AppPortfolio() {
  return (
    <Wrapper className="portfolio" style={{ marginTop: 50 }}>
      Portfólio
      <PortfolioSection
        title={"Netflix clone"}
        description={
          "Catálogo de filmes com aparência semelhante ao da Netflix."
        }
        url={"https://github.com/LeSales/Netflix-clone-ReactJS"}
        img={
          "https://raw.githubusercontent.com/LeSales/Personal-page/main/assets/img/netflix.PNG"
        }
      ></PortfolioSection>
      <div className="separator"></div>
      <PortfolioSection
        title={"algaShopping"}
        description={"Lista de compras"}
        url={"https://github.com/LeSales/desafio-react-algaworks-redux"}
        img={
          "https://raw.githubusercontent.com/LeSales/Personal-page/main/assets/img/algaShopping.PNG"
        }
      ></PortfolioSection>
      <div className="separator"></div>
      <PortfolioSection
        title={"Vestibulum"}
        description={"Layout genérico, utilizando React"}
        url={"https://github.com/LeSales/Layout-ReactJS"}
        img={
          "https://raw.githubusercontent.com/LeSales/Personal-page/main/assets/img/vesdtibulum.PNG"
        }
      ></PortfolioSection>
    </Wrapper>
  );
}

function PortfolioSection(props) {
  return (
    <>
      <div className="conteiner">
        <div className="imagem">
          <img className="netflix" src={props.img} alt="Preview Image" />
        </div>
        <div className="infos">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className="buttons">
            <a
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              <Button variant="contained" className="preview">
                Preview
              </Button>
            </a>

            <a
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              <Button variant="contained" className="visit">
                Visit
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppPortfolio;
