import styled from "styled-components";

export const QuizContainer = styled.div`
  text-align: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export const QuizMainTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-size: 150px;
`;

export const Intro = styled.p`
  display: flex;
  justify-content: center;
  margin-top:50px;
  font-size: 30px;
  color: gray;
`;

export const QuizLevelBut = styled.button`
  background-color: #E9D735;
  position: relative;
  border-radius: 10px;
  width: 300px;
  height: 100px;
  font-size: 55px;
  color: white;
  margin: 50px 10px 0 50px;
  transition: all 0.1s;
 
  &:hover:focus {
    background-color: #E9D735;
    color: #E98B35;
  }
  



  
`;
export const QuizTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-size: 30px;
`;
export const QuizLevelContainer = styled.div`
  display: flex;
  justify-content: center;
`;
