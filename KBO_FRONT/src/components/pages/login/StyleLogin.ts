import styled from 'styled-components';


export const LoginForm = styled.section`

  align-items: center;
  padding: 20px;
  display: flex;
  position : relative;
  top : 50px;
  justify-content: center;
  align-items: center; 

  
`;
export const Loginbox = styled.form
`
align-items: center;
width: 450px;
height: 370px;
background: #5C9B57;
border-radius: 30px;

`;

export const Title = styled.h1`
  margin-top: 100px;
  font-size: 50px;
  font-color: black;
  text-align: center;
  font-weight: 100px;

`;

export const Inputs = styled.div
`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input
`
  font-size: 20px;
  width: 290px;
  padding: 20px;
  margin : 10px;
  border: none;
  border-radius: 10px;

`;

export const Conditions = styled.div
`
  font-size: 20px;
  text-align: center;
  color: #DADADA;
  position : relative;
  left:-58px;
  
`;
export const LoginButton = styled.button
`
  background-color: white;
  color: #AEAEAE;
  border: none;
  padding: 15px 25px;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  position : relative;
  top : 50px;
  left: 300px;

`;

export const LogSuccess = styled.h2
`
font-family: 'KBO-Dia-Gothic_bold';
color : white;
align-items: center;
position : relative;
top : 100px;

`