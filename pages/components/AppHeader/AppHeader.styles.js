import styled from "styled-components"

export const Wrapper = styled.header`
    height: 70px;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 32px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color : #FFF;
    color: #21211F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


    div{
        max-width: 980px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    h2{
        font-family: sans-serif;
    }
    ul {
        display: flex;
        text-decoration: none;
        list-style: none;
        
    }
    a:hover{
        
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #E22A25;
        color:#FFF;
        border-radius: 10px;
        transition: all ease 0.3s;
    }
    a {
        padding:0 1rem;
        font-size: 20px;
        font-weight: 700;
        font-family: sans-serif;
        cursor: pointer;
    }
`