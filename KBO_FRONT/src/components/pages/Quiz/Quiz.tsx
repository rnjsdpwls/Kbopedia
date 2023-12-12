import React, { useState } from 'react';
import { Container, AnswerButton, QuizAnswer, QuizBox, QuizTitle, QuizOption } from "./StyleQuiz";
import QuizDummy from '../../../db/quizData.json';
import { useParams } from 'react-router-dom';

type QuizData = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuizParams = {
  id: string;
};

export default function Quiz() {
  const { id } = useParams<QuizParams>();
  const quizId = id ? parseInt(id, 10) : undefined;

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const quiz: QuizData | undefined = quizId ? QuizDummy.quizbasic.find((item) => item.id === quizId) : undefined;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleConfirm = () => {
    setSelectedAnswer(null);
  };

  return (
    <Container>
      <QuizTitle>Quiz</QuizTitle>

      {quiz && (
        <div>
          <QuizBox>{quiz.question}</QuizBox>

          {quiz.options.map((option, index) => (
            <QuizOption
              key={index}
              onClick={() => handleAnswerSelect(option)}
              style={{ cursor: 'pointer', fontWeight: selectedAnswer === option ? 'bold' : 'normal' }}
            >
              {option}
            </QuizOption>
          ))}
        </div>
      )}

      {selectedAnswer && (
        <QuizAnswer style={{ backgroundColor: selectedAnswer !== quiz?.correctAnswer ? '#A64D4D' : '#0D3F6A' }}>
          {selectedAnswer === quiz?.correctAnswer ? (
            <>
              <p>정답입니다!</p>
            </>
          ) : (
            <>
              <p>틀렸습니다.</p>
            </>
          )}
          <AnswerButton onClick={handleConfirm}>확인</AnswerButton>
        </QuizAnswer>
      )}
    </Container>
  );
};


