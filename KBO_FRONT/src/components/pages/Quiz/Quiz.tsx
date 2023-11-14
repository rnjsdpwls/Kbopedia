import React, { useState } from 'react';
import{Container,AnswerButton,QuizAnswer,QuizBox,QuizTitle,QuizText,QuizOption} from "./StyleQuiz"
import {Link} from "react-router-dom";

interface Quiz {
  question: string;
  options: string[];
  correctAnswer: string;
}

const QuizPage: React.FC = () => {
  const quizzes: Quiz[] = [
    {
      question: 'Q. 다음 중 야구 용어가 아닌 것은?',
      options: ['홈런', '스트라이크', '골인', '삼진'],
      correctAnswer: '골인',
    },
  ];

  const [currentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const currentQuiz = quizzes[currentQuizIndex];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);

  };

  return (
    <Container>
   <QuizTitle><a href='/Quiz'>Quiz</a></QuizTitle>
     <QuizBox>
         <QuizText>{currentQuiz.question}</QuizText>
     </QuizBox>

      <ul>
        {currentQuiz.options.map((option, index) => (
          <QuizOption
            key={index}
            onClick={() => handleAnswerSelect(option)}
            style={{ cursor: 'pointer', fontWeight: selectedAnswer === option ? 'bold' : 'normal' }}
          >
            {option}
          </QuizOption>
        ))}
      </ul>

     

      {selectedAnswer && (
  <QuizAnswer style={{ backgroundColor: selectedAnswer !== currentQuiz.correctAnswer ? '#A64D4D' : '#0D3F6A' }}>
    {selectedAnswer === currentQuiz.correctAnswer ? (
      <>
        <p>정답입니다!</p>
        <AnswerButton>
          <Link to="/Quiz">확인</Link>
        </AnswerButton>
      </>
    ) : (
      <>
        <p>틀렸습니다.</p>
        <AnswerButton>
          <Link to="/Quiz">확인</Link>
        </AnswerButton>
      </>
    )}
  </QuizAnswer>
)}

    </Container>
  );
};

export default QuizPage;



// import{Container,Rectangle,QuizBox,QuizTitle,QuizText,QuizOption} from "./StyleQuiz"

// export default function Quiz() {
//     return (
//       <Container>

//         <QuizTitle>QUIZ</QuizTitle>

//         <QuizBox>        
//         <QuizText> Q. 다음 중 야구 용어가 아닌 것은?</QuizText>
//         </QuizBox>

//         <Rectangle/>
//            <QuizOption>오프사이드</QuizOption>
//         <Rectangle/>
//            <QuizOption>노히트노런</QuizOption>
//         <Rectangle/>
//            <QuizOption>무사만루</QuizOption>
//         <Rectangle/>
//            <QuizOption>삼자범퇴</QuizOption>

        
//       </Container>

//     );
//   };
  