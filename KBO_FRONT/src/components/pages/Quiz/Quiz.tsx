import React, { useState, useEffect } from 'react';
import { Container, AnswerButton, QuizAnswer, QuizBox, QuizTitle, QuizFinish, QuizOption } from "./StyleQuiz";

interface Quiz {
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function Quiz() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizSuccess, setQuizSuccess] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0); 
  const [totalQuestions, setTotalQuestions] = useState<number>(0);

  useEffect(() => {
    const dummyQuizzes: Quiz[] = [
      {
        question: 'Q1. 다음 중 야구 용어가 아닌 것은?',
        options: ['홈런', '골인', '스트라이크', '삼진'],
        correctAnswer: '골인',
      },
      {
        question: 'Q2. 야구에서 "삼진 아웃"이 의미하는 것은?',
        options: ["볼넷", "안타", "스트라이크 아웃", "더블 플레이"],
        correctAnswer: "스트라이크 아웃",
      },
      {
        question: 'Q3. 다음 중 야구 용어가 아닌 것은?',
        options: ["포수", "야수", "투수", "사수"],
        correctAnswer: "사수",
      },
    ];

    setQuizzes(dummyQuizzes);
    setTotalQuestions(dummyQuizzes.length); 
  }, []);

  const currentQuiz = quizzes[currentQuizIndex];

  // 답 고르기
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleConfirm = () => {
    if (selectedAnswer) {
      // 정답을 맞춘 경우
      if (selectedAnswer === currentQuiz.correctAnswer) {
        console.log('정답을 맞췄습니다.');
        setScore(score + 1);
       }
       else {
        // 정답을 틀린 경우
        console.log('틀렸습니다.');
       }

        // 다음 퀴즈로 또는 퀴즈 성공 처리
        if (currentQuizIndex + 1 < quizzes.length) {
          setCurrentQuizIndex(currentQuizIndex + 1);
        } else {
          console.log('마지막 퀴즈를 완료했습니다.');
          setQuizSuccess(true);
        }
       
      
      setSelectedAnswer(null);
    }
  };

  const handleQuizLinkClick = () => {
    window.location.reload();
  };

  return (
    <Container>
      <QuizTitle onClick={handleQuizLinkClick} style={{ cursor: 'pointer' }}>Quiz</QuizTitle>

      {quizzes.length > 0 && (
        <>
          <QuizBox>{currentQuiz.question}</QuizBox>

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
                <p>정답입니다!</p>
              ) : (
                <p>틀렸습니다.</p>
              )}
              <AnswerButton onClick={handleConfirm}>
                확인
              </AnswerButton>
            </QuizAnswer>
          )}

          {quizSuccess && (
            <QuizFinish style={{ lineHeight: '1' }}>
              <p>오늘의 퀴즈 
                완료!!</p>
                <br/>
                <p>점수:{score}/{totalQuestions}</p>
              <AnswerButton onClick={handleQuizLinkClick} style={{ cursor: 'pointer' , top: '70%' ,left:'38%'}}>
                재도전
              </AnswerButton>
            </QuizFinish>
          )}
        </>
      )}
    </Container>
  );
}