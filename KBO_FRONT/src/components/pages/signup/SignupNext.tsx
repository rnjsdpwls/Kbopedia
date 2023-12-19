import {LoginForm,Loginbox,SignSuccess,SignLoginButton,Title} from "./StyleSignup"
import { Link} from "react-router-dom";

export default function LoginNext() {
  return (
    <div>
      <Title> Create your account!</Title>
      <LoginForm>
       <Loginbox>
       <SignSuccess> 회원가입에 성공! </SignSuccess>
        
        <div className="nextbut">
           <SignLoginButton>
            <Link to="/Login">로그인하기</Link>
            </SignLoginButton>
        </div>
        </Loginbox>
      </LoginForm>
    </div>
  );
}