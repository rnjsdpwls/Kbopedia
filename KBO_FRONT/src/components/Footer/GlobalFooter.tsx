import { DivideLine, Footer, FooterInfo, FooterLogo, FooterLogoTitle, LogoContainer } from "./StyledGlobalFooter";
import logo from '../../images/logo.png';

export default function GlobalFooter() {
  return (
    <Footer>
      <LogoContainer>
        <FooterLogo src={logo} alt='logo' />
        <FooterLogoTitle>KBO Pedia</FooterLogoTitle>
      </LogoContainer>
      <DivideLine />
      <FooterInfo>
        오류접수 | ksunperson@naver.com
        <br />
        Github | https://github.com/rnjsdpwls/Kbopedia
      </FooterInfo>
    </Footer >
  );
}

