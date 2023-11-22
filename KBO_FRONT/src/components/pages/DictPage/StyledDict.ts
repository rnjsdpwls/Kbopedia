import styled from "styled-components";

export const SearchInput = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const DictTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-size: 70px;
`;

export const InputForm = styled.input`
  border: 1px solid black;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgb(0 0 0 /20%); // 마지막 투명도
  font-size: 17px;
  &:focus {
    outline: none;
  }
`;

export const BtnSearch = styled.button`
  left: 10px;
  margin-left: 10px;
`;
