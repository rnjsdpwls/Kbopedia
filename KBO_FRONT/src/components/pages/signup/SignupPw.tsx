import {Conditions,NextButtonPw,LoginForm,Title,Sign,Inputs,Input,Loginbox} from "./StyleSignup"

export default function Signup() {
  return (
    <div>
   
      <Title> Create your account!</Title>
      <LoginForm>
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
              autoComplete="off"
              required
            />
          </Inputs>
        <Conditions>
          <p>대소문자 • 숫자 8~20자 이내</p>
        </Conditions>
        </form>
        <div className="nextbut">
          <NextButtonPw type="submit">다음</NextButtonPw>
        </div>
        </Loginbox>
      </LoginForm>
    </div>
  );
}
