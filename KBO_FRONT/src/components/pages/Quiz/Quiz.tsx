import {Container,Rectangle,QuizBox,QuizText,QuizOption} from "./StyleQuiz"

export default function Quiz() {
    return (
      <Container>

        <QuizText>QUIZ</QuizText>
        <QuizBox>        
        <QuizText>Q.다음 중 야구 용어가 아닌 것은?</QuizText>
        </QuizBox>

        <Rectangle/>
        <Rectangle/>
        <Rectangle/>
        <Rectangle/>

          <QuizOption>오프사이드</QuizOption>
          <QuizOption>노히트노런</QuizOption>
          <QuizOption>무사만루</QuizOption>
          <QuizOption>삼자범퇴</QuizOption>

      </Container>

    );
  };
  