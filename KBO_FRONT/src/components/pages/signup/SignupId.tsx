import {GlobalStyle,LoginForm,Title,Sign,Inputs,Input,NextButton,Conditions,NextButtonPw, Loginbox, SignSuccess,SignLoginButton} from "./StyleSignup"
import { Link} from "react-router-dom";
import React, { useState } from 'react';


const Signup: React.FC = () => {
    const [step, setStep] = useState(1);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNext = () => {
      setStep(step + 1);
    };
  
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };


  return (
   
   
    <div>
    
      <GlobalStyle/>
      <Title>
        Create your account!</Title>
      <LoginForm>

    {step === 1 && (
       <Loginbox>
        <form action="">
          <Sign> 로그인에 사용할 
              <br/> 아이디를 입력해주세요 
          </Sign>
          <Inputs>
            <Input
              type="text"
              className="id"
              placeholder="아이디(이메일) 입력"
              value={username}
              onChange={handleUsernameChange}
              autoComplete="off"
              required
            />
          </Inputs>
        </form>
        <div className="nextbut">
          <NextButton onClick={handleNext}>다음</NextButton>
        </div>
        </Loginbox>
    )}

   {step === 2 && (
        <Loginbox>
        <form action="">
          <Sign> 로그인에 사용할 
              <br/> 비밀번호를 입력해주세요 
          </Sign>
          <Inputs>
            <Input
              type="password"
              className="pw"
              placeholder="비밀번호 입력"
              value={password} 
              onChange={handlePasswordChange}
              autoComplete="off"
              required
            />
          </Inputs>
        <Conditions>
          <p>대소문자 • 숫자 8~20자 이내</p>
        </Conditions>
        </form>
        <div className="nextbut">
          <NextButtonPw onClick={handleNext}>다음</NextButtonPw>
        </div>
        </Loginbox>

    )}

    {step === 3 && (
        <Loginbox>
       <SignSuccess> 회원가입에 성공! </SignSuccess>
        
        <div className="nextbut">
           <SignLoginButton>
            <Link to="/Login">로그인하기</Link>
            </SignLoginButton>
        </div>
        </Loginbox>
              
    )}

      </LoginForm>
    </div>
  );
}


export default Signup;