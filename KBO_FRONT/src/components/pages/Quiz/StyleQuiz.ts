import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
 top: 50%;
 left:50%;

`;

export const QuizTitle = styled.text`
font-weight: 700;
font-size: 76px;
text-align: center;
color: #000000;
position: absolute;
left:-20%;
top: -80%;
`

export const QuizBox = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
position: absolute;
width: 636px;
height: 97px;
top: -45%;
left:-75%;
background: #FFFFFF;
border: 10px solid #5C9B57;
border-radius: 100px;
font-weight: 500;
font-size: 30px;
color: #000000;
`;


export const QuizOption = styled.div`
  font-size: 38px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top :10px;
  background: #D9D9D9;
  color: #000000;
  position: relative;
  top: -40%;
  left:-50%;
  width: 425px;
  height: 68px;
  border-radius: 20px;
`;



export const QuizAnswer = styled.div`
  font-size: 40px;
  background-color: #0D3F6A;
  color: #FFFFFF;
  position: absolute;
  top: 10%;
  left:-41%;
  width: 356px;
  height:250px;
  padding:80px;
  border-radius: 30px;
  text-align: center;
`;


export const AnswerButton = styled.div`
background-color: white;
color: #AEAEAE;
border: none;
padding: 15px;
width: 100px;
border-radius: 30px;
font-size: 20px;
cursor: pointer;
font-weight: bold;
position : absolute;
top: 70%;
left:35%;
`;

export const QuizFinish = styled.div`
  font-size: 40px;
  background-color: #E4DF73;
  color: #FFFFFF;
  position: absolute;
  top: -20%;
  left:-47%;
  width: 400px;
  height:300px;
  padding:50px;
  border-radius: 30px;
  text-align: center;
`;