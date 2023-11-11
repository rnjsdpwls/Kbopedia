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
  color: black;
  text-align: center;
  font-weight: 50;

`;

export const Inputs = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Sign = styled.div`
margin-top : 50px;
text-align: center;
color : white;
font-size: 30px;
position : relative;

`;

export const Input = styled.input`
  font-size: 20px;
  width: 290px;
  padding: 20px;
  border: none;
  border-radius: 10px;
`;

export const KakaoLogin = styled.div`
position : relative;
top: -40px;
left: 100px;
`;

export const StyledKaKao = styled.img`
width: 260px;
height:60px;
`;

export const Conditions = styled.div`
  font-size: 15px;
  text-align: center;
  color: #DADADA;
  position : relative;
  top : 10px;
  left:-50px;
`;

export const NextButton = styled.button`
  background-color: white;
  color: #AEAEAE;
  border: none;
  padding: 20px 30px;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  position : relative;
  top : 90px;
  left:330px;
`;

export const NextButtonPw = styled.button`
  background-color: white;
  color: #AEAEAE;
  border: none;
  padding: 20px 30px;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  position : relative;
  top : 75px;
  left:330px;
`;


export const SignSuccess = styled.h2`

font-family: 'KBO-Dia-Gothic_bold';
font-size: 40px;
color : white;
align-items: center;
position : relative;
top : 100px;
left: 90px;
`;

export const SignLoginButton = styled.h2`

background-color: white;
  color: #AEAEAE;
  padding: 10px 20px;
  width: 125px;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  position : relative;
  top : 150px;
  left: 160px;
`;