import styled from "styled-components";

export const SearchInput = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const DictTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  font-size: 70px;
`;

export const InputForm = styled.input`
  border: 1px solid black;
  width: 350px;
  height: 50px;
  border-radius: 10px;
  padding-left: 15px;
  box-shadow: 0 2px 6px rgb(0 0 0 /20%); // 마지막 투명도
  font-size: 17px;
  &:focus {
    outline: none;
  }
`;

export const BtnSort = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? "#61a063" : "#c6dfc4")};
  color: ${({ isActive }) => (isActive ? "white" : "initial")};
  position: relative;
  border-radius: 10px;
  width: 100px;
  height: 35px;
  margin: 30px 10px 0 10px;
  transition: all 0.3s;
  overflow: hidden;
  &:hover {
    color: #61a063;
  }
  &:hover:focus {
    background-color: #61a063;
    color: white;
  }
`;

export const BtnSortContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BtnSearch = styled.button`
  left: 10px;
  margin-left: 10px;
`;
