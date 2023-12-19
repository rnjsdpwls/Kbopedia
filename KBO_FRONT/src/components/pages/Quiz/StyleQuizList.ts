import styled from "styled-components";



//QuizPage_Style
export const QuizContainer = styled.div`
  text-align: center;
  justify-content: center;
  margin-top:150px;
`;


export const QuizMainTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 140px;
  font-weight: 600;
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
  width: 350px;
  height: 90px;
  font-size: 70px;
  color: white;
  margin: 50px;
  transition: all 0.1s;
 
  &:hover {

    background-color: #c6dfc4;
  }
 
  
`;



//QuizList_Style
export const QuizListContainer = styled.div`
justify-content: center;
align-items: center;
position: absolute;
top: 10%;
left: 35%;
`;

export const QuizLeveltitle = styled.div`
  
  border-radius: 10px;
  width: 450px;
  height: 100px;
  font-size: 60px;
  font-weight: 600;
  color: #61a063;
  margin-top: 30px;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const QuizLevel = styled.button`
  float: right;
  position: relative;
  top: -30px;
  left: 100px;
  width: 120px;
  height: 60px;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  background-color: #c6dfc4;
`;

export const QuizTitle = styled.div`
  display: flex;
  textAlign: left; 
  justify-content: left;
  width: 550px;
  padding: 20px;
  font-size: 18px;
  border-bottom: 2px solid black;
  
`;

export const QuizCompleted = styled.p`
margin-left: 20px;
color: #A64D4D;
`

export const QuizLevelContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BtnMoveTop = styled.button`
  float: right;
  margin-bottom: 30px;
  margin-right: -100px;
  color: #5c9b57;
  font-size: 37px;
`;