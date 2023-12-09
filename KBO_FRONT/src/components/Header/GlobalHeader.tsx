import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './GlobalHeader.css';

export default function GlobalHeader() {
  return (
    <div className='headContainer'>
      <Link to="/">
        <span>
          <img className='logo' src={logo} alt='logo' />
        </span>
      </Link>
      <span className='BtnContainer'>
        <Link to="/Login"><button className='btnLogin'>Login</button></Link>
      </span>
    </div>
  );
}