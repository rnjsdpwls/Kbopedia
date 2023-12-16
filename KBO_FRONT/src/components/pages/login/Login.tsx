import KaKao from '../../../images/kakao_login_large_narrow.png';
import { Link } from "react-router-dom";
import { LoginForm, Title, StyledKaKao, Loginbox, Sign1, KakaoLogin } from "./StyleLogin"

export default function Login() {
  const client_id = process.env.REACT_APP_CLIENT;
  const redirect_uri = process.env.REACT_APP_REDIRECT;

  const handleKakaoLogin = async () => {

    console.log(client_id)
    console.log(redirect_uri)
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
  }

  return (
    <div>
      <Title><Link to={'/login'}>Login</Link> </Title>
      <LoginForm>
        <Loginbox>
          <Sign1>
            <br />
            카카오톡으로 로그인 해주세요
          </Sign1>
          <KakaoLogin>
            <StyledKaKao src={KaKao} alt="카카오톡 로그인" onClick={handleKakaoLogin} />
          </KakaoLogin>
        </Loginbox>
      </LoginForm>
    </div>
  );
}