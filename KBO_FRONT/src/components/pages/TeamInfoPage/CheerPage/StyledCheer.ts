import styled from "styled-components";

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const BtnSortContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const NextPageInfo = styled.p`
  display: flex;
  text-align: center;
  align-items: center;
  margin-right: 10px;
`;

export const BtnNext = styled.button`
  width: 80px;
  height: 30px;
  text-align: center;
  align-items: center;
  background-color: pink;
  border-radius: 10px;
`;

export const BtnSort = styled.button<{ handleSortTypeClick: boolean }>`
  background-color: ${({ handleSortTypeClick }) => (handleSortTypeClick ? "#61a063" : "#c6dfc4")};
  color: ${({ handleSortTypeClick }) => (handleSortTypeClick ? "white" : "initial")};
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

export const BtnPrevContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
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
  margin-top: 40px;
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

export const BtnMoveTop = styled.button`
  float: right;
  margin-bottom: 30px;
  margin-right: 50px;
  color: #5c9b57;
  font-size: 37px;
`;
