import {Container,Rectangle,QuizBox,QuizText,QuizOption} from "./StyleQuiz"

export default function Quiz() {
    return (
      <Container>

        {/* QUIZ */}
        <QuizText style={{ width: '256px', height: '96px', left: '665px', top: '202px' }}>QUIZ</QuizText>

        {/* Rectangle 24 */}
        <QuizBox style={{ width: '886px', height: '117px', left: '342px', top: '334px' }}>
        {/* Q. */}
        <QuizText style={{ width: '120px', height: '109px', left: '381px', top: '346px' }}>Q.</QuizText>
  
        {/* 다음 중 야구 용어가 아닌 것은? */}
        <QuizOption style={{ width: '678px', height: '55px', left: '501px', top: '373px' }}>다음 중 야구 용어가 아닌 것은?</QuizOption>
        
        </QuizBox>

        {/* Rectangle 20 */}
        <Rectangle style={{ width: '625px', height: '68px', left: '480px', top: '507px' }} />
  
        {/* Rectangle 21 */}
        <Rectangle/>
  
        {/* Rectangle 22 */}
        <Rectangle style={{ width: '625px', height: '68px', left: '480px', top: '731px' }} />
  
        {/* Rectangle 23 */}
        <Rectangle style={{ width: '625px', height: '69px', left: '480px', top: '843px' }} />
  
          {/* 오프사이드 */}
          <QuizOption style={{ width: '219px', height: '55px', left: '684px', top: '632px' }}>오프사이드</QuizOption>
  
          {/* 노히트노런 */}
          <QuizOption style={{ width: '220px', height: '55px', left: '675px', top: '514px' }}>노히트노런</QuizOption>
  
          {/* 무사만루 */}
          <QuizOption style={{ width: '177px', height: '55px', left: '697px', top: '744px' }}>무사만루</QuizOption>
  
          {/* 삼자범퇴 */}
          <QuizOption style={{ width: '187px', height: '55px', left: '700px', top: '850px' }}>삼자범퇴</QuizOption>

       
      </Container>
    );
  };
  