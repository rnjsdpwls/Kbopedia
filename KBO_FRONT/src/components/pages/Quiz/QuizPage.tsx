import React, { useState } from "react";
import { QuizContainer, QuizMainTitle, QuizLevelContainer, QuizLevelBut, Intro,Exp} from './StyleQuizList';
import QuizDummy from '../../../db/quizData.json';
import { Link } from 'react-router-dom';

type QuizData = {
  id: number;
  question: string;
  option: string[];
  correctAnswer: string;
};

type QuizLevelType = 'quizbasic' | 'quizdeep';

export default function QuizPage() {
  const [quizLevel, setQuizLevel] = useState<QuizLevelType>('quizbasic');

  const handleLevelChange = (level: QuizLevelType) => {
    setQuizLevel(level);
  };

  const filteredQuizzes = QuizDummy[quizLevel];

  return (
    <div>
      <QuizContainer>
        <QuizMainTitle>Quiz</QuizMainTitle>

        <Intro>퀴즈의 난이도를 선택해 주세요</Intro>

        <QuizLevelContainer>
          
          <Link to="/quiz/basic">
            <QuizLevelBut onClick={() => handleLevelChange('quizbasic')}>Level 1</QuizLevelBut>
          </Link>
           
           
          <Link to="/quiz/deep">
            <QuizLevelBut onClick={() => handleLevelChange('quizdeep')}>Level 999</QuizLevelBut>
          </Link>
        </QuizLevelContainer>

        <Exp>본 퀴즈는 Kbopedia 홈페이지에서 제공되는 야구 용어들을 기반하여 제작되었습니다.</Exp>


      </QuizContainer>
    </div>
  );

};
