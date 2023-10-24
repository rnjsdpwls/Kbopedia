import '../styles/Field.css';
import field from '../../../../images/field.png';
import CommunityMenu from './CommunityMenu';
import RecordMenu from './RecordMenu';
import TeamMenu from './TeamMenu';
import DictMainMenu from './DictMenu';
import { Link } from 'react-router-dom';

const MainField = () => {
  return (
    <div className='fieldImageContainer'>
      <img src={field} alt='field' className='fieldImage' />
      <div className='btnContainer'>
        <Link to="/Community"> <CommunityMenu /> </Link>
        <RecordMenu />
        <Link to="/TeamInfo"><TeamMenu /></Link>
        <DictMainMenu />
      </div>
    </div >
  );
}

export default MainField;
