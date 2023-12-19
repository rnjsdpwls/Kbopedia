import React from 'react';
import { useNavigate } from "react-router-dom";
import { StyledPostBtn } from "./StyledCommunity";

interface Ipost {
  label: string;
}

const PostBtn : React.FC<Ipost> = ({ label }) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('code') !== null;

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/posting');
    } else {
      alert("로그인이 필요한 기능입니다.");
      navigate('/login')
    }
  }

  return (
    <div>
      <StyledPostBtn onClick={handleButtonClick}>{label}</StyledPostBtn>
    </div>
  )
}

export default PostBtn;