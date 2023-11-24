import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const TeamName = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
  color: #5c9b57;
  font-size: 90px;
`;

export const StyledForUrl = styled.a`
  &:hover {
    color: #5c9b57;
  }
`;

export const StyledImage = styled.img`
  margin-top: 80px;
  width: 500px;
  height: 300px;
`;

export const StyledImages = styled.img`
  display: block;
  width: 75px;
  height: 60px;
  padding-top: 6px;
  padding-bottom: 6px;
  cursor: pointer;
`;

export const StyledTeamDetail = styled.div`
  margin-top: 80px;
  // margin-right: 50px;
  color: black;
  font-size: 35px;
`;

export const LineSpacing = styled.p`
  margin-top: 30px;
`;

export const LogoImagePosition = styled.div`
  margin-left: 80px;
  margin-right: 50px;
`;

export const PropsContainer = styled.div`
  display: flex;
`;
