import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  height: 250px;
  background-color: #827853;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterLogo = styled.img`
  height: 50px;
  opacity: 0.6;
`;

export const FooterLogoTitle = styled.p`
  text-align: center;
  margin-left: 10px;
  color: #edece6;
`;

export const DivideLine = styled.hr`
  width: 300px;
  border: 0.2px solid #b7b29d;
  margin: 15px 0;
`;

export const FooterInfo = styled.p`
  color: #edece6;
  white-space: nowrap;
  text-align: center;
  line-height: 1.7em;
`;
