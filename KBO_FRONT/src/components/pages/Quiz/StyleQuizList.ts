import styled from "styled-components";

export const QuizContainer = styled.div`
  text-align: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export const QuizMainTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  font-size: 120px;
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
  width: 270px;
  height: 80px;
  font-size: 50px;
  color: white;
  margin: 50px 10px 0 50px;
  transition: all 0.1s;
 
  &:hover:focus {
    background-color: #E9D735;
    color: #E98B35;
  }
  
  
`;


export const QuizLeveltitle = styled.div`
  background-color: #61a063;
  border-radius: 10px;
  width: 400px;
  height: 100px;
  font-size: 60px;
  color: white;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuizTitle = styled.div`
  display: flex;
  textAlign: 'left' 
  justify-content: center;
  margin: 30px -10px  10px;
  font-size: 15px;
  
`;
export const QuizLevelContainer = styled.div`
  display: flex;
  justify-content: center;
`;
