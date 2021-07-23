import React from "react";
import styled from "styled-components";
import Mailer from "../AppEmailForm/AppEmailForm";

const flexCenter = `
display:flex;
justify-content:center;
align-items:center;
`;

export const Wrapper = styled.div`
  ${flexCenter}
  width: 99vw;
  min-height: 100vh;
  background-color: #21211f;
  color: #fff;

  h2 {
    font-size: 22px;
    font-style: normal;
    font-family: sans-serif;
    margin: 0;
    padding: 20px;
  }
  .conteiner {
    ${flexCenter}
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 980px;
    height: 100%;
    background-color: #ad4e4e;
  }
  .formulario {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 980px;
    width: 50vw;
    height: 80vh;
    border-radius: 10px;
    font-family: sans-serif;
    background-color: #fff;
    color: #21211f;
  }

  

  .redes {
    max-width: 40vw;
    width: 50vw;
    height: 70%;
    background-color: #832727;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    font-weight: 500;
    color: #4d4d4d;
    
  }

  .inputField {
    margin-bottom: 15px;
    border-radius: 30px;
    border-style: none;
    background: #fff;
    border: 1px solid #c7c7c7;
    height: 1.6rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
  }

  .inputSubmit {
    margin: 15px 0;
    display: inline-block;
    width: 30%;
    font-weight: 500;
    font-family: sans-serif;
    text-align: center;
    vertical-align: middle;
    align-self:center;
    user-select: none;
    font-size: 1rem;
    cursor: pointer;
    color: #fff;
    background-color: #21211f;
    border-color: #21211f;

    padding: 12px 30px;
    border-radius: 30px;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;


    border-radius: 30px;
    border-style: none;
    border: 1px solid #9c9c9c;
  }

  label {
    font-family: open sans,sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
    color: #9c9c9c;
    margin:0 0 5px;
  }


  textarea{
    line-height: 1.5;
    border: 1px solid #c7c7c7;
  }

  input:focus, textarea:focus {
  background-color:#f8f8f8;
}

textarea:focus, input:focus{
    outline: none;
}
`;

function AppContato() {
  return (
    <Wrapper className="contato">
      <div className=".conteiner">
        <div className="formulario">
          <h2>Deixe sua mensagem</h2>
          <form>
            <label>Nome</label>
            <input className="inputField" type="text" name="name" />

            <label>E-mail</label>
            <input className="inputField" type="email" name="user_email" />

            <label>Mensagem</label>
            <textarea name="message" rows="5" />
            <input className="inputSubmit" type="submit" value="Enviar" />
          </form>
          
        </div>
      </div>
    </Wrapper>
  );
}

export default AppContato;
