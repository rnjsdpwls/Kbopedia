import React, { useEffect } from 'react';
import { useRecoilState, atom } from 'recoil';
import { sessionState } from './SessionState';
import axios from 'axios';
import { SessionState } from './SessionState'; // 타입 임포트
import { KakaoLogin, LoginForm, Loginbox, Sign1, StyledKaKao, Title } from './StyleLogin';
import { Link, useNavigate } from 'react-router-dom';

function UserProfile() {
  const [session, setSession] = useRecoilState<SessionState>(sessionState);
  const navigate = useNavigate();
  const handleHomeClick = async () => {
    await navigate('/');
    window.location.reload();
  };
  useEffect(() => {
    // URL에서 카카오 닉네임을 추출
    const urlParams = new URLSearchParams(window.location.search);
    const kakaoNickname = urlParams.get('kakao_nickname');
    const user_id = urlParams.get('user_id');
    const code = urlParams.get('code');

    // 로컬 스토리지에 카카오 닉네임을 저장
    if (kakaoNickname && code && user_id) {
      localStorage.setItem('kakao_nickname', kakaoNickname);
      localStorage.setItem('code', code);
      localStorage.setItem('user_id', user_id);

      // Recoil 상태에도 반영
      setSession(prevState => ({
        ...prevState,
        isAuthenticated: true,
        user: {
          ...prevState.user,
          properties: {
            ...prevState.user?.properties,
            nickname: kakaoNickname,
          }
        }
      }));
    }
  }, [setSession]);

  if (!session.isAuthenticated || !session.user) {
    return <div>로그인 정보를 가져오는 중...</div>;
  }

  return (
    <div>
      <Title>로그인 완료</Title>
      <LoginForm>
        <Loginbox>
          <Sign1>
            <br />
            <p>{session.user.properties.nickname}님 환영합니다.</p>
            <button style={{color:'white', fontSize:30, marginTop:70}} onClick={handleHomeClick}>홈으로 가기</button>
          </Sign1>
        </Loginbox>
      </LoginForm>
    </div>
  );
}

export default UserProfile;