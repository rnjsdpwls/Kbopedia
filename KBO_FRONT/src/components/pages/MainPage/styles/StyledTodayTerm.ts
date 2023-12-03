import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
`;

export const Spacing = styled.hr`
  width: 1000px;
  border: 1px solid #5c9b57;
`;

export const Title = styled.p`
  font-size: 70px;
  margin: 50px 0 10px;
`;

export const TermContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #61a063;
  margin: 50px 0;
`;

export const TermTitle = styled.p`
  display: flex;
  font-size: 17px;
  background-color: #61a063;
  color: white;
  width: 200px;
  height: 100px;
  text-align: center;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  line-height: 1.3em;
`;

export const TermDescription = styled.p`
  display: flex;
  justify-content: center;
  padding: 15px 10px;
  white-space: pre-wrap;
  line-height: 1.3em;
  width: 700px;
  max-height: 100px;
  overflow: auto;
`;
