import React from "react";
import styled from "styled-components";

export const Wrapper = styled.header`
  height: 70px;
  position: fixed;
  max-width: 100vw;
  overflow: hidden;
  width: 100vw;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  color: #21211f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width:768px) {
    .menu {
      display:none;
    }
    h2 {
      padding: 0 3rem;
    }
  }

  div {
    max-width: 980px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h2 {
    font-family: sans-serif;
  }
  ul {
    display: flex;
    text-decoration: none;
    list-style: none;
  }

  a:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e22a25;
    color: #fff;
    border-radius: 10px;
    transition: all ease 0.3s;
  }
  
  a {
    padding: 0 1rem;
    font-size: 2rem;
    font-weight: 700;
    font-family: sans-serif;
    cursor: pointer;
    text-decoration: none;
  }
  a:visited {
  text-decoration: none;
  color: inherit;
  }

  a, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
`;

export const SandwichButton = styled.div`
    width:2rem;
    height:2rem;
    top: 25px;
    right: 15vw;
    z-index:20;
    display:none;
    @media (max-width: 680px) {
        display:flex;
        justify-content:space-around;
        flex-flow:column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color:#FFF;
        border-radius:10px;
        transform-origin:1px;
        transition: all 0.2s linear;
        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

function AppHeader() {
  return (
    <Wrapper>
      <div>
        <h2>Bem vindo</h2>
        <nav>
          <ul className="menu">
            <li>
              <a
                href="/"
                onClick={(e) => {
                  let home = document.querySelector(".home");
                  e.preventDefault();
                  home && home.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  let sobre = document.querySelector(".sobre");
                  e.preventDefault();
                  sobre && sobre.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  let portfolio = document.querySelector(".portfolio");
                  e.preventDefault();
                  portfolio && portfolio.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Portfólio
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  let contato = document.querySelector(".contato");
                  e.preventDefault();
                  contato && contato.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
}

export default AppHeader;
