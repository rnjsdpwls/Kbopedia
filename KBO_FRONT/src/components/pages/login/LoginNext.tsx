import {GlobalStyle,LoginForm,Loginbox,LogSuccess,Title} from "./StyleLogin"

export default function LoginNext() {
  return (
    <div>
      <GlobalStyle/>
      <Title> <a href="/Login">Login</a> </Title>
      <LoginForm>
      <Loginbox>
       <LogSuccess> 로그인에 성공! </LogSuccess>
       </Loginbox>
      </LoginForm>
    </div>
  );
}

