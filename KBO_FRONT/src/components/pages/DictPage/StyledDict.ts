import styled from "styled-components";

export const SearchInput = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const InputForm = styled.input`
  border: 1px solid black;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  font-size: 17px;
  &:focus {
    outline: none;
  }
`;

export const BtnSearch = styled.button`
  left: 10px;
  margin-left: 10px;
`;

export const InputFormContainer = styled.div``;
