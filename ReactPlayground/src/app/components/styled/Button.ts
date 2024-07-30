import styled from "styled-components";

export const Button = styled.button`
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 0.5em;
  margin: 0 1em;
  border: 1px solid black;
  transition: all 100ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
  &:active {
    background-color: #999;
  }
`;