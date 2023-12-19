import React, { useState } from 'react';
import { Container, AnswerButton, QuizAnswer, QuizBox, QuizTitle, QuizOption } from "./StyleQuiz";
import QuizDummy from '../../../db/quizData.json';
import { useParams, useNavigate } from 'react-router-dom';

type QuizData = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuizParams = {
  id: string;
};


const findQuizById = (id: number) => {
  const quizBasic = QuizDummy.quizbasic.find((item) => item.id === id);
  const quizDeep = QuizDummy.quizdeep.find((item) => item.id === id);

  return quizBasic || quizDeep || undefined;
};

export default function Quiz() {
  const { id } = useParams<QuizParams>();
  const quizId = id ? parseInt(id, 10) : undefined;
  const [completedQuizzes, setCompletedQuizzes] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);


  const quiz: QuizData | undefined = quizId ? findQuizById(quizId) : undefined;

  const navigate = useNavigate();
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };
  
  const markQuizAsCompleted = (quizId: number) => {
    const completedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes') || '[]');
  
    if (!completedQuizzes.includes(quizId)) {
      completedQuizzes.push(quizId);
      localStorage.setItem('completedQuizzes', JSON.stringify(completedQuizzes));
      setCompletedQuizzes(completedQuizzes); // 상태 업데이트
    }
  };
  const handleConfirm = () => {
    if (quiz && selectedAnswer) {
      // 정답을 맞춘 경우
      if (selectedAnswer === quiz.correctAnswer) {
        console.log('정답을 맞췄습니다.');
        markQuizAsCompleted(quiz.id);
        navigate(-1);
      } else {
        // 정답을 틀린 경우
        console.log('틀렸습니다.');
      }
      setSelectedAnswer(null);
    }
  };
  
  return (
    <Container>
      <QuizTitle>Quiz</QuizTitle>

      {quiz && (
        <div>
          <QuizBox>{quiz.question}</QuizBox>

          {quiz.options.map((option) => {
  const fontSize = Math.max(24, 38 - option.length); // Adjust the minimum font size as needed
  return (
    <QuizOption
      key={option}
      fontSize={fontSize}
      onClick={() => handleAnswerSelect(option)}
      style={{ cursor: 'pointer', fontWeight: selectedAnswer === option ? 'bold' : 'normal' }}
    >
      {option}
    </QuizOption>
  );
})}
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
}
