import React from "react";
import styled from "styled-components";

const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  ${flexCenter}
  flex-direction: row;
  background-color: #21211f;
  color: #fff;

  .conteiner {
    ${flexCenter}
    gap: 10px;
    flex-direction: row;
    //color: #000;
    max-width: 980px;

  }

  h2 {
    font-size: 30px;
    font-style: normal;
    font-family: sans-serif;
    margin: 0;
    padding:0 20px;
  }

  p {
    font-family: sans-serif;
    font-size: 20px;
    padding:0 20px;
  }

  .sobre-text {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 50vw;
    margin:2rem;
    min-width: 400px;
    height: 60vh;
    min-height: 300px;
  }

  .sobre-image {
    ${flexCenter}
    width: 100px;
    min-width: 400px;
    height: 60vh;
    min-height: 300px;
  }
`;

function AppSobre() {
  return (
    <Wrapper className="sobre">
      <div className="conteiner">
        <div className="sobre-text">
          <h2>Olá,</h2>
          <p>
          Mussum Ipsum, cacilds vidis litro abertis. 
          Suco de cevadiss deixa as pessoas mais interessantis. 
          Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. 
          Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, 
          eget. Paisis, filhis, espiritis santis.
          </p>
        </div>
        <div className="sobre-image">To do: imagem</div>
      </div>
    </Wrapper>
  );
}

export default AppSobre;
