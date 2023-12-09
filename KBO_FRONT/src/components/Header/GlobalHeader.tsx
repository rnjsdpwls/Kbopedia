import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './GlobalHeader.css';


const GlobalHeader = () => {
  return (
    <>
      <div className='headContainer'>
        <Link to="/">
          <span className='logo'>
            <img src={logo} alt='logo' style={{ height: '55px' }} />
          </span>
        </Link>
        <span className='BtnContainer'>
          <Link to="/Login"><button className='btnLogin'>Login</button></Link>
        </span>
      </div>
    </>
  );
}

export default GlobalHeader;
