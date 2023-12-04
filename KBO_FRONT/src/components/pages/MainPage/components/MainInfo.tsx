import { InfoTextContainer, InfoTextProps } from "../styles/StyledMainInfo";
import { Container } from "../styles/StyledTodayTerm";

export default function MainInfo() {
  return (
    <Container>
      <InfoTextContainer>
        <InfoTextProps><b style={{ color: '#5c9b57' }}>KBO Pedia</b>는 야구 초보자도 쉽게 즐길 수 있도록 만들어진 사이트입니다.<br />
          다양한 서비스를 통해 야구에 대한 재미와 이해를 함께 느껴보세요!</InfoTextProps>
      </InfoTextContainer>
    </Container>
  );
}
