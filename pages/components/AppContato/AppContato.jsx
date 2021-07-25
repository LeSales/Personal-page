import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Mailer from "../AppEmailForm/AppEmailForm";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const flexCenter = `
display:flex;
justify-content:center;
align-items:center;
`;

export const Wrapper = styled.div`
  ${flexCenter}
  width: 100%;
  min-height: 100vh;
  background-color: #21211f;
  color: #fff;

  

  h2 {
    font-size: 2.4rem;
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
  }
  .formulario {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width:600px;
    max-width: 750px;
    max-height: 620px;
    width: 50vw;
    height: 80vh;
    border-radius: 10px;
    font-family: sans-serif;
    background-color: #fff;
    color: #21211f;
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
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .inputSubmit {
    margin: 15px 0;
    display: flex;
    justify-content: center;
    width: 30%;
    font-weight: 500;
    font-family: sans-serif;
    text-align: center;
    vertical-align: middle;
    align-self: center;
    user-select: none;
    font-size: 1rem;
    cursor: pointer;
    color: #fff;
    background-color: #21211f;
    border-color: #21211f;

    padding: 12px 30px;
    border-radius: 30px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    border-radius: 30px;
    border-style: none;
    border: 1px solid #9c9c9c;
  }

  label {
    font-family: open sans, sans-serif;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 1px;
    color: #9c9c9c;
    margin: 0 0 5px;
  }

  textarea {
    line-height: 1.5rem;
    border: 1px solid #c7c7c7;
    resize: none;
  }

  input:focus,
  textarea:focus {
    background-color: #f8f8f8;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }

  .separator {
    width: 60%;
    max-width: 980px;
    height: 2px;
    background-color: #e0e0e0;
    margin: 1rem 0;
  }

  .links {
    margin: 0 10px;
  }

  .links:hover{
    color: #616161 !important;
  }

  .links:visited {
    color: inherit;
  }

  @media (max-width: 768px){
    .formulario{
      min-width: 90vw;
    }
    
  }
`;

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_xed1lv3",
    "template_vqcvu1n",
    e.target,
    "user_n9Joj17xPBlNCaRnoUhzK"
  ).then(res=>{
    console.log(res);
  }).catch(err=> console.log(err));

  let form = document.getElementById("myForm");
  form.reset();
  setTimeout(()=>{
    alert("Mensagem enviada, obrigado pelo contato!");
}, 300);

}

function AppContato() {
  return (
    <Wrapper className="contato">
      <div className=".conteiner">
        <div className="formulario">
          <h2>Deixe sua mensagem</h2>
          <form id="myForm" onSubmit={sendEmail}>
            <label>Nome</label>
            <input className="inputField" type="text" name="name" />

            <label>E-mail</label>
            <input className="inputField" type="email" name="user_email" />

            <label>Mensagem</label>
            <textarea name="message" rows="5" />
            <input className="inputSubmit" type="submit" value="Enviar" />
          </form>
          <div className="separator"></div>
          <div>
            <a
              href="https://www.linkedin.com/in/leandro-sales-87249059/"
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              <LinkedInIcon style={{fontSize:30}}/>
            </a>
            <a
              href="https://github.com/LeSales"
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              <GitHubIcon style={{fontSize:30}}/>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default AppContato;
