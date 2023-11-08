import { useRef } from 'react';
import '../styles/TeamMenu.css';
import ball from '../../../../images/ball.png';

const TeamMenu = () => {
  let menuRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="team-menu-container" ref={menuRef}>
        <h1 className='team-menu-heading'>구단</h1>
        <div className="team-menu-trigger" >
          <img src={ball} alt='ballBtn' />
        </div>
      </div >
    </>
  );
};

export default TeamMenu;