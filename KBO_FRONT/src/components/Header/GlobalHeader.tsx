import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import './GlobalHeader.css';

const GlobalHeader = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('code') !== null;
  const [kakaoNickname, setKakaoNickname] = useState<string>('');

  const handleLogout = async () => {
    localStorage.removeItem('code');
    localStorage.removeItem('kakao_nickname');
    localStorage.removeItem('user_id');

    // navigate 함수를 호출한 후 페이지를 새로고침합니다.
    await navigate('/');
    window.location.href = 'http://127.0.0.1:8000/kakaoLogout';
  };

  useEffect(() => {
    const storedNickname = localStorage.getItem('kakao_nickname');
    if (storedNickname) {
        setKakaoNickname(storedNickname);
    }
}, []);

  return (
    <>
      <div className='headContainer'>
          <span className='logo'>
            <img src={logo} alt='logo' style={{ height: '55px' }} onClick={()=>window.location.href='http://localhost:3000'}/>
          </span>
        <span className='BtnContainer'>
          {
            isLoggedIn
              ? <div>
                <p>{kakaoNickname} 님
                <button className='btnLogin' onClick={handleLogout}>Logout</button>
                </p>
              </div>
              : <Link to="/Login"><button className='btnLogin'>Login</button></Link>
          }
        </span>
      </div>
    </>
  );
}

export default GlobalHeader;
