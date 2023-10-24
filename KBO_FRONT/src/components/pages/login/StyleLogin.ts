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
  font-size: 40px;
  font-color: black;
  text-align: center;
  font-family: 'KBO-Dia-Gothic_bold';
  font-weight: 100;

`;

export const Inputs = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 18px;
  width: 270px;
  padding: 15px;
  margin : 8px;
  border: none;
  border-radius: 10px;
  font-family: 'KBO-Dia-Gothic_bold';
`;

export const Conditions = styled.div`
  font-size: 15px;
  text-align: center;
  margin: 15px;
  color: #DADADA;
  position : relative;
  top : -24px;
  left:-79px;
  font-family: 'KBO-Dia-Gothic_bold';
  
`;
export const LoginButton = styled.button`
  background-color: white;
  color: #AEAEAE;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 13px;
  cursor: pointer;
  font-weight: bold;
  position : relative;
  top : -40px;
  left:100px;
  font-family: 'KBO-Dia-Gothic_bold';

`;

export const LogSuccess = styled.h2`

font-family: 'KBO-Dia-Gothic_bold';
color : white;
align-items: center;
position : relative;
top : 100px;

`