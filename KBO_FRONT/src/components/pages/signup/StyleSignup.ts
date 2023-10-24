// import styled from 'styled-components';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'KBO-Dia-Gothic_bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/KBO-Dia-Gothic_bold.woff') format('woff');
    font-weight: normal;
  }
`;

export const LoginForm = styled.section`

  align-items: center;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center; 

  
`;
export const Loginbox = styled.form
`
  align-items: center;
  width: 370px;
  height: 300px;
  background: #5C9B57;
  border-radius: 30px;

`;

export const Title = styled.h1`
  margin-top: 100px;
  font-size: 30px;
  color: black;
  text-align: center;
  font-family: 'KBO-Dia-Gothic_bold';
  font-weight: 100;

`;

export const Inputs = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Sign = styled.div`
margin-top : 70px;
color : white;
font-family: 'KBO-Dia-Gothic_bold';
`

export const Input = styled.input`
  font-size: 18px;
  width: 270px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-family: 'KBO-Dia-Gothic_bold';
`;

export const Conditions = styled.div`
  font-size: 10px;
  text-align: center;
  color: #DADADA;
  position : relative;
  top : -5px;
  left:-79px;
  font-family: 'KBO-Dia-Gothic_bold';
  
`;

export const NextButton = styled.button`
  background-color: white;
  color: #AEAEAE;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 13px;
  cursor: pointer;
  font-weight: bold;
  position : relative;
  top : 40px;
  left:120px;
  font-family: 'KBO-Dia-Gothic_bold';

`;

export const NextButtonPw = styled.button`
  background-color: white;
  color: #AEAEAE;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 13px;
  cursor: pointer;
  font-weight: bold;
  position : relative;
  top : 5px;
  left:120px;
  font-family: 'KBO-Dia-Gothic_bold';

`;


export const SignSuccess = styled.h2`

font-family: 'KBO-Dia-Gothic_bold';
color : white;
align-items: center;
position : relative;
top : 100px;

`;

export const SignLoginButton = styled.h2`

background-color: white;
  color: #AEAEAE;
  padding: 10px 20px;
  width: 70px;
  border-radius: 30px;
  font-size: 13px;
  cursor: pointer;
  font-weight: bold;
  position : relative;
  top : 160px;
  left : 130px;
  font-family: 'KBO-Dia-Gothic_bold';


`;