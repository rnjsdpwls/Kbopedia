import React,{useState, FormEvent} from 'react';
import {GlobalStyle,LoginForm,Title,Inputs,Input,Conditions,LoginButton,Loginbox} from "./StyleLogin"
import { useNavigate} from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigateToLogin = () => {
    navigate("/LoginNext");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     
     if (username === 'ID' && password === 'PassWord') {
      navigateToLogin();
    } else {
      alert('잘못된 ID 또는 PassWord');
    }

  };
  
  return (
    <div>
      <GlobalStyle/>
      <Title> <a href="/Login">login</a> </Title>
      <LoginForm>
       <Loginbox>
        <form onSubmit={handleSubmit}>
          <Inputs>
            <Input
              type="text"
              className="id"
              placeholder="아이디(이메일) 입력"
              autoComplete="off"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              className="pw"
              placeholder="비밀번호 입력"
              autoComplete="off"
              required
              value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </Inputs>
        
        <Conditions>
          <h6>대소문자 • 숫자 8~20자 이내</h6>
        </Conditions>
        <LoginButton type="submit" >로그인하기</LoginButton>
        </form>
        </Loginbox>
      </LoginForm>
    </div>
  );

}
