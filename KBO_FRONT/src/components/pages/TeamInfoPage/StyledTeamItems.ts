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
    transition: color 0.2s ease;
  }
`;

// 큰 로고 이미지
export const StyledImage = styled.img`
  margin-top: 120px;
  width: 500px;
  height: 300px;
`;

// 좌측 로고들
export const StyledImages = styled.img`
  display: block;
  width: 70px;
  height: 55px;
  padding: 6px 0;
  cursor: pointer;
`;

export const StyledTeamDetail = styled.div`
  margin-top: 80px;
  margin-left: 20px;
  font-size: 34px;
  line-height: 1.3em;
`;

export const LineSpacing = styled.p`
  margin-top: 27px;
`;

export const LogoImagePosition = styled.div`
  margin: 0 50px 50px 80px;
`;

export const PropsContainer = styled.div`
  display: flex;
`;
