import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import logo from '../../images/logo.png';
import './GlobalHeader.css';
import { sessionState } from '../pages/login/SessionState';
import axios from 'axios';

const GlobalHeader = () => {
  const session = useRecoilValue(sessionState);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('access_token') !== null;

  const handleLogout = async () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('kakao_nickname');

    // navigate 함수를 호출한 후 페이지를 새로고침합니다.
    await navigate('/');
    window.location.reload();
  };

  return (
    <>
      <div className='headContainer'>
        <Link to="/">
          <span className='logo'>
            <img src={logo} alt='logo' style={{ height: '55px' }} />
          </span>
        </Link>
        <span className='BtnContainer'>
          {
            isLoggedIn
              ? <button className='btnLogin' onClick={handleLogout}>Logout</button>
              : <Link to="/Login"><button className='btnLogin'>Login</button></Link>
          }
        </span>
      </div>
    </>
  );
}

export default GlobalHeader;
