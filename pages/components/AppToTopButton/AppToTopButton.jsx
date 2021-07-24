import styled from "styled-components";
import { useEffect } from "react";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export const Wrapper = styled.div`
  background-color: #333;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: fixed;
  right: 15px;
  bottom: 15px;
  //padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const icone = `
  
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

  return (
  <Wrapper className="topo" onClick={() => toTop()}>
    <ArrowDropUpIcon style={{fontSize:50, color:"#979797"}}/>
  </Wrapper>
  );
}

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default AppToTopButton;
