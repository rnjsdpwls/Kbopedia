import React from 'react';

const YourComponent = () => {
  const handleLogin = () => {
    // 특정 링크로 리다이렉트
    window.location.href = 'http://127.0.0.1:8000/kakaoLoginLogic';
  };

  return (
    <div>
      {/* 로그인 버튼을 클릭하면 handleLogin 함수 호출 */}
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default YourComponent;
