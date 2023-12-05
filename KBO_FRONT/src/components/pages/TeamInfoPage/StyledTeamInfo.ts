import styled from "styled-components";

export const TeamContainer = styled.div`
  text-align: center;
  position: relative;
  margin: 100px 0;
`;

export const TeamInfoMainTitle = styled.div`
  font-size: 70px;
`;

export const Info = styled.p`
  float: right;
  font-size: 11px;
  color: gray;
`;

export const TeamTable = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 20px;
`;

export const TeamTableTitle = styled.ul`
  color: #5c9b57;
  font-size: 20px;
  width: 150px;
`;

export const TeamTableContainer = styled.ul`
  justify-content: center;
  text-align: center;
  text-align: center;
`;

export const TeamTableItem = styled.li`
  display: flex;
  text-align: center;
  width: 150px;
  white-space: pre-wrap;
`;

export const HoverableTeamTableItem = styled(TeamTableItem)`
  &:hover {
    color: #5c9b57;
    transition: color 0.2s ease;
  }
`;

export const Spacing = styled.hr`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 800px;
`;
