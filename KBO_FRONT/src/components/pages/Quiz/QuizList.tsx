
import React, { useState } from "react";
import { QuizContainer, QuizMainTitle, QuizLevelContainer, QuizLevelBut, Intro } from './StyleQuizList';
import QuizDummy from '../../../db/quizData.json';
import { Link } from 'react-router-dom';

type QuizData = {
  id: number;
  question: string;
  option: string[];
  correctAnswer: string;
};

type QuizLevelType = 'quizbasic' | 'quizdeep';

export default function QuizList() {
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

      </QuizContainer>
    </div>
  );
}

// import React, { useState } from "react";
// import {QuizContainer,QuizTitle, QuizMainTitle,QuizLevelContainer, QuizLevelBut,Intro} from './StyleQuizList';
// import QuizDummy from '../../../db/quizData.json';
// import { Link } from 'react-router-dom';

// type QuizData = {
//   id: number;
//   question: string;
//   option: string[];
//   correctAnswer: string;
// };

// type QuizLevelType = 'quizbasic' | 'quizdeep';

// export default function QuizList() {
//   const [quizLevel, setQuizLevel] = useState<QuizLevelType>('quizbasic');

//   const handleLevelChange = (level: QuizLevelType) => {
//     setQuizLevel(level);
//   };

  
//   const filteredQuizzes = QuizDummy[quizLevel];

//   return (
//     <div>
//       <QuizContainer>
//         <QuizMainTitle>Quiz</QuizMainTitle>

//         <Intro>퀴즈의 난이도를 선택해 주세요</Intro>

//         <QuizLevelContainer>
//         <Link to="/Quiz">
//           <QuizLevelBut onClick={() => handleLevelChange('quizbasic')}>Level 1</QuizLevelBut>
//         </Link>

//         <Link to="/Quiz">
//           <QuizLevelBut onClick={() => handleLevelChange('quizdeep')}>Level 999</QuizLevelBut>
//         </Link>
//         </QuizLevelContainer>

//         <ul>
//           {filteredQuizzes.map((quiz: QuizData) => (
//             <div key={quiz.id}>
//               <Link to="/Quiz">
//               <QuizTitle>{quiz.question}</QuizTitle>
//               </Link>
//             </div>
//           ))}
//         </ul>


//       </QuizContainer>
//     </div>
//   );
// }
