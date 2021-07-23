import styled from "styled-components";
import { useEffect } from "react";

export const Wrapper = styled.div`
  background-color: #333;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  position: fixed;
  right: 15px;
  bottom: 15px;
  padding: 20px;
  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;
`;

function AppToTopButton() {
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY >= 20) {
        document.querySelector(".topo").style.display = "block";
      } else {
        document.querySelector(".topo").style.display = "none";
      }
    };
  });

  return <Wrapper className="topo" onClick={() => toTop()}></Wrapper>;
}

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default AppToTopButton;
