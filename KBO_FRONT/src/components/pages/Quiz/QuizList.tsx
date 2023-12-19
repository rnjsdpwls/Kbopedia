import React, { useState, useEffect } from 'react';
import { QuizListContainer, QuizTitle, QuizLeveltitle,BtnMoveTop } from './StyleQuizList';
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
    // 컴포넌트가 처음 렌더링될 때 완료된 퀴즈 목록을 확인하고 상태를 설정
    const savedCompletedQuizzes = localStorage.getItem('completedQuizzes');
    if (savedCompletedQuizzes) {
      setCompletedQuizzes(JSON.parse(savedCompletedQuizzes));
    }
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행

  // 퀴즈 목록을 가져올 때 완료 상태를 고려하여 퀴즈 목록을 가져옴
  const quizzes = QuizDummy[level].map((quiz: QuizData) => ({
    ...quiz,
    completed: completedQuizzes.includes(quiz.id),
  }));

  const levelText = level === 'quizbasic' ? 'Level 1' : 'Level 999';

  return (
    <QuizListContainer>
      <QuizLeveltitle>{levelText} 문제 </QuizLeveltitle>
      {quizzes.map((quiz: QuizData) => (
        <div key={quiz.id}>
          <Link to={`/Quiz/${quiz.id}`}>
            <QuizTitle>
              {quiz.question}
              {quiz.completed && <span style={{ marginLeft: '10px', color: '#A64D4D' }}>완료</span>}
            </QuizTitle>
          </Link>
        </div>
      ))}
      <BtnMoveTop onClick={MoveToTop}><AiFillUpCircle /></BtnMoveTop>
    </QuizListContainer>
  );
}
