import styled from "styled-components";

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BtnSort = styled.button`
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

export const Info = styled.div`
  margin-top: 20px;
  text-align: center;
  align-items: center;
  margin-right: 10px;
  font-size: 11px;
  color: gray;
`;

export const CheersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  // margin: 80px 0;
  margin-top: 20px;
`;

export const CheerTitle = styled.li`
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: green;
    transition: color 0.2s ease;
  }
`;

export const CheerLyrics = styled.p`
  color: gray;
  margin-top: 10px;
  font-size: 14px;
`;
