import styled from "styled-components";

export const Container = styled.div`
  padding: 0 3rem;
  
  h1 {
    margin: 3rem 0;
  }

  .serie {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    align-items: center;
    justify-content: center;
  }

  img {
    width: 350px;
    border-radius: 1rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  span {
    font-weight: normal;
    font-size: 120%;
    margin-bottom: 1rem;
    line-height: 130%;
  }

  .InformAdic {
    font-size: 100%;
    opacity: 0.5;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
    max-width: 50%;
    
  }

  button {
    background-color: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all .3s;
  }

  button:hover {
    background-color: #5848c2;
  }

`;