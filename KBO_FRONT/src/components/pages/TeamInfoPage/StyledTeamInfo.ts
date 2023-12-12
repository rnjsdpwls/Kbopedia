import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 80px 0;
`;

export const TeamInfoMainTitle = styled.div`
  font-size: 70px;
`;

export const Info = styled.p`
  margin-left: 45%;
  font-size: 11px;
  color: gray;
`;

export const TeamTable = styled.ul`
  display: flex;
  margin-top: 80px;
  justify-content: center;
`;

export const TeamTableTitle = styled.ul`
  color: #5c9b57;
  font-size: 20px;
  width: 200px;
`;

export const TeamTableContainer = styled.ul``;

export const TeamTableItem = styled.li`
  width: 200px;
`;

export const HoverableTeamTableItem = styled(TeamTableItem)`
  &:hover {
    color: #5c9b57;
    transition: color 0.2s ease;
  }
`;

export const Spacing = styled.hr`
  margin: 15px 0;
`;

export const StyledTeamDetail = styled.span``;
