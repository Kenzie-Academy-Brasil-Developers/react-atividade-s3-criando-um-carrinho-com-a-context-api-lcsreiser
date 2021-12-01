import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vh;

  li {
    list-style: none;
    color: white;
    font-size: 30px;
    width: 20vw;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1vh;
  }
`;
