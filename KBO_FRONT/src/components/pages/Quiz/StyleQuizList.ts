import styled from "styled-components";

export const QuizContainer = styled.div`
  text-align: center;
  justify-content: center;
  margin-top:200px;
`;

export const QuizListContainer = styled.div`
justify-content: center;
align-items: center;
position: absolute;
top: 10%;
left: 35%;
`;

export const QuizMainTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 100px;
  margin-top: 20px;
`;

export const Intro = styled.p`
  display: flex;
  justify-content: center;
  margin-top:50px;
  font-size: 25px;
  color: gray;
`;

export const QuizLevelBut = styled.button`
  background-color: #61a063;
  position: relative;
  border-radius: 10px;
  width: 270px;
  height: 80px;
  font-size: 50px;
  color: white;
  margin: 50px;
  transition: all 0.1s;
 
  &:hover {

    background-color: #c6dfc4;
  }
 
  
`;


export const QuizLeveltitle = styled.div`
  
  border-radius: 10px;
  width: 400px;
  height: 100px;
  font-size: 60px;
  color: #61a063;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

`;


export const QuizTitle = styled.div`
  display: flex;
  textAlign: left; 
  justify-content: left;
  width: 550px;
  padding: 10px;
  font-size: 18px;
  border-bottom: 2px solid black;
  
`;


export const QuizLevelContainer = styled.div`
  display: flex;
  justify-content: center;
`;
