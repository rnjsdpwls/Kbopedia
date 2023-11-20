//////////데이터 직접 코드 작성///////////
import React, { useState,useEffect } from 'react';
import { Container, AnswerButton, QuizAnswer, QuizBox, QuizTitle, QuizOption } from "./StyleQuiz";


interface Quiz {
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function Quiz() {

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

  const handleConfirm = () => {
    setSelectedAnswer(null); 
  };

  const handleQuizLinkClick = () => {
    window.location.reload();
  };


  return (
    <Container>
      <QuizTitle 
         onClick={handleQuizLinkClick}
         style={{cursor: 'pointer'}}
        >Quiz</QuizTitle>
      
      <QuizBox>
        {currentQuiz.question}
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
            </>
          ) : (
            <>
              <p>틀렸습니다.</p>
            </>
          )}
          <AnswerButton onClick={handleConfirm}>
            확인
          </AnswerButton>
        </QuizAnswer>
      )}
    </Container>
  );
};
