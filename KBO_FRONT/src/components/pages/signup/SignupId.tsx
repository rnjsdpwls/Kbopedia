import {GlobalStyle,LoginForm,Title,Sign,Inputs,Input,NextButton,Loginbox} from "./StyleSignup"

export default function Signup() {
  return (
    <div>
      <GlobalStyle/>
      <Title>
        Create your account!</Title>
      <LoginForm>
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
              autoComplete="off"
              required
            />
          </Inputs>
        </form>
        <div className="nextbut">
          <NextButton type="submit">다음</NextButton>
        </div>
        </Loginbox>
      </LoginForm>
    </div>
  );
}
