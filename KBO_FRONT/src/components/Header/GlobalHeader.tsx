import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './GlobalHeader.css';

interface BtnContainerProps {
  onSignUpClick: () => void;
  onLoginClick: () => void;
}

const GlobalHeader = ({ onSignUpClick, onLoginClick }: BtnContainerProps) => {
  return (
    <>
      <div className='headContainer'>
        <Link to="/">
          <span className='logo'>
            <img src={logo} alt='logo' style={{ height: '55px' }} />
          </span>
        </Link>
        <span className='BtnContainer'>
          <button className='btnSignup' onClick={onSignUpClick}>Sign Up</button>
          <button className='btnLogin' onClick={onLoginClick}>Login</button>
        </span>
      </div>
    </>
  );
}

export default GlobalHeader;
export type { BtnContainerProps }; 