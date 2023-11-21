import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  width: 1000px;
`;

export const List = styled.li`
  padding: 20px;
  border-bottom: 2px solid #000929;
`;

export const ItemTermContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemTerm = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
`;

export const ItemDescription = styled.span`
  position: relative;
  margin: 10px;
  width: 600px;
`;

export const BtnWords = styled.button`
  background-color: #c6dfc4;
  position: relative;
  border-radius: 10px;
  width: 100px;
  height: 35px;
  margin: 10px;
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
