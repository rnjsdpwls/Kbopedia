import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

export const BtnWords = styled.button`
  background-color: #c6dfc4;
  position: relative;
  border-radius: 10px;
  width: 100px;
  height: 35px;
  margin: 0 10px;
  transition: all 0.3s;
  overflow: hidden;
  &:focus {
    outline: none;
  }
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #c6dfc4;
    top: 100%;
    left: 0;
    transition: all 0.3s;
    z-index: -1;
  }
  &:hover::before {
    transform: translateY(-100%);
  }
  &:hover {
    color: #61a063;
  }
`;
