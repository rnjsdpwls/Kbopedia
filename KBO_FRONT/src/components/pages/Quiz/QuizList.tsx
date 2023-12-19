import React, { useState, useEffect } from 'react';
import { QuizListContainer, QuizTitle, QuizLevel, QuizLeveltitle, QuizCompleted, BtnMoveTop } from './StyleQuizList';
import QuizDummy from '../../../db/quizData.json';
import { Link } from 'react-router-dom';
import { AiFillUpCircle } from "react-icons/ai";

type QuizData = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  completed?: boolean;
};

type QuizPageProps = {
  level: 'quizbasic' | 'quizdeep';
};

export default function QuizList({ level }: QuizPageProps) {
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  const [completedQuizzes, setCompletedQuizzes] = useState<number[]>([]);

  useEffect(() => {
    const savedCompletedQuizzes = localStorage.getItem('completedQuizzes');
    if (savedCompletedQuizzes) {
      setCompletedQuizzes(JSON.parse(savedCompletedQuizzes));
    }
  }, []); 

  const quizzes = QuizDummy[level].map((quiz: QuizData) => ({
    ...quiz,
    completed: completedQuizzes.includes(quiz.id),
  }));

  const oppositeLevelText = level === 'quizbasic' ? 'Level 999' : 'Level 1';
  const oppositeLevelPath = level === 'quizbasic' ? 'deep' : 'basic';
  const levelText = level === 'quizbasic' ? 'Level 1' : 'Level 999';


  return (
    <QuizListContainer>
      <QuizLeveltitle>{levelText} 문제 </QuizLeveltitle>

      <Link to={`/quiz/${oppositeLevelPath}`}>
        <QuizLevel>
          {oppositeLevelText}<br/> Go
        </QuizLevel>
      </Link>

      {quizzes.map((quiz: QuizData) => (
        <div key={quiz.id}>
          <Link to={`/Quiz/${quiz.id}`}>
            <QuizTitle>
              {quiz.question}
              {quiz.completed && <QuizCompleted>완료</QuizCompleted>}
            </QuizTitle>
          </Link>
        </div>
      ))}

      <BtnMoveTop onClick={MoveToTop}><AiFillUpCircle /></BtnMoveTop>

      
    </QuizListContainer>
  );
}
