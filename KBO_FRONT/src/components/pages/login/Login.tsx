import React,{useState} from 'react';
import KaKao from '../../../images/kakao_login_large_narrow.png';
import { Link } from "react-router-dom";
import {LoginForm,Title,Input,KakaoLogin,LoginSuccess,MainButton,Sign,Sign1,StyledKaKao,NextButton,Loginbox} from "./StyleLogin"

export default function Login() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');



  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div>

      <Title> <a href="/Login">Login</a> </Title>
      <LoginForm>
      {step === 1 && (
        <>
       <Loginbox>
            <Sign1>
             STEP1
             <br/>
             카카오톡으로 로그인 해주세요
            </Sign1>
              <KakaoLogin>
                <Link to="/">
                  <StyledKaKao src={KaKao} alt="카카오톡 로그인" />
                </Link>
              </KakaoLogin>

              <div className="nextbut">
              <NextButton onClick={handleNext}>다음</NextButton>
              </div>
      </Loginbox>
        </>
    )}
          
   {step === 2 && (
            <Loginbox>
            <Sign>
               STEP2 
               <br/>
               사용할 닉네임 입력해주세요
             </Sign>
          
            <Input
              type="text"
              placeholder="닉네임 입력"
              autoComplete="off"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

             <div className="nextbut">
              <NextButton onClick={handleNext}>다음</NextButton>
            </div>

        </Loginbox>
    )}
  
    {step === 3 && (
          <Loginbox>
            <LoginSuccess>로그인 성공!</LoginSuccess>
            <div className="nextbut">
              <MainButton>
                <Link to="/">홈으로</Link>
              </MainButton>
            </div>
          </Loginbox>
    )}

      </LoginForm>
    </div>
  );

}
