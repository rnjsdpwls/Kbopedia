import React from "react";
import { useParams } from 'react-router-dom';
import { QuizContainer, QuizTitle } from './StyleQuizList';
import QuizDummy from '../../../db/quizData.json';
import { Link } from 'react-router-dom';


type QuizData = {
  id: number;
  question: string;
  option: string[];
  correctAnswer: string;
};

type QuizPageProps = {
  level: 'quizbasic' | 'quizdeep';
};

const QuizPage: React.FC<QuizPageProps> = ({ level }) => {
  const quizzes = QuizDummy[level];

  return (
    <QuizContainer>
      {quizzes.map((quiz: QuizData) => (
        <div key={quiz.id}>
            <Link to="/Quiz">
          <QuizTitle>{quiz.question}</QuizTitle>
          </Link>
        </div>
      ))}
    </QuizContainer>
  );
};

export default QuizPage;
