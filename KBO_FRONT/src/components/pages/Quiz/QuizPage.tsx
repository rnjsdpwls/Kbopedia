import { QuizContainer, QuizTitle, QuizLevel } from './StyleQuizList';
import QuizDummy from '../../../db/quizData.json';
import { Link } from 'react-router-dom';

type QuizData = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuizPageProps = {
  level: 'quizbasic' | 'quizdeep';
};

export default function QuizPage({ level }: QuizPageProps) {
  const quizzes = QuizDummy[level];
  const levelText = level === 'quizbasic' ? 'Level 1' : 'Level 999';

  return (
    <QuizContainer>
      <QuizLevel style={{ fontSize: '40px' }}>{levelText} 문제 </QuizLevel>
      {quizzes.map((quiz: QuizData) => (
        <div key={quiz.id} style={{ borderBottom: '2px solid' }}>
          <Link to={`/Quiz/${quiz.id}`}>
            <QuizTitle>{quiz.question}</QuizTitle>
          </Link>
        </div>
      ))}
    </QuizContainer>
  );
};
